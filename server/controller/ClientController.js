const Client=require('../models/Client');
const bcrypt = require('bcrypt');
const jwtUtils = require('../utils/jwt.utils');
const asyncLib = require('async');

const EMAIL_REGEX  = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const PASSWORD_REGEX = /^(?=.*\d).{6,10}$/

const createClient = async (req, res) => {

    const email = req.body.email;
    const nom = req.body.nom;
    const prenom = req.body.prenom;
    const mdp = req.body.password;


    if (email == null || nom == null || prenom == null || mdp == null){
        return res
            .status(400)
            .json({'error': 'Missing parameters'})
    }

    if (!EMAIL_REGEX.test(email)){
        return res
            .status(400)
            .json({'error': 'Email is not valid'})
    }

    // Password expression. Password must be between 4 and 8 digits long and include at least one numeric digit.

    if(!PASSWORD_REGEX.test(mdp)){
        return res
            .status(400)
            .json({'error': 'Password is not valid'})
    }

    asyncLib.waterfall([
        (done) => {
            Client.findOne({
                attributes: ['email'],
                where: {email: email}
            })
            .then( (userFound) => {
                done(null, userFound)
            })
            .catch (err => {

            })
        },
        (userFound,done) => {
            if(!userFound){
                bcrypt.hash(mdp,5,(err,bcryptedPassword) => {
                    done(null, userFound,bcryptedPassword)
                })
            }
            else {
                return res 
                    .status(409)
                    .json({'error': 'user with the provided email already exist'});
            }
        },
        (userFound,bcryptedPassword,done) => {
            Client.create({
                nom: nom,
                prenom: prenom,
                email: email,
                password: bcryptedPassword
            })
            .then( (newUser) => {
                done(newUser);
            })
            .catch(err => {
                return res
                    .status(500)
                    .json({
                        'error': 'cannot add user'
                    })
            })

        },
        (newUser) => {
            if(newUser){
                return res
                    .status(201)
                    .json({
                        'message': 'client registred'
                    })
            }
            else {
                return res
                    .status(500)
                    .json({
                        'error': 'cannot add user'
                    })
            }
        } 
    ])
}

const login = (req,res) => {

    const email = req.body.email;
    const mdp = req.body.password;

    if(email == null || mdp == null){
        return res 
            .status(400)
            .json({'error': 'missing parameters'})
    }

    Client.findOne({
        where: {email: email}
    })
    .then (userFound => {
        if(userFound){
            bcrypt.compare(mdp, userFound.password, (errBycrypt, resBycrypt) => {
                if(resBycrypt){
                    return res
                        .status(200)
                        .json({
                            'userId': userFound.idClient,
                            'token': jwtUtils.generateTokenForUser(userFound),
                            'message': 'Logged'
                        })
                }
                else {
                    return res 
                        .status(403)
                        .json({
                            'error': 'Wrong password'
                        })
                }
            })
        }
        else {
            return res
                .status(404)
                .json({'error': 'User with the provided email not found'})
        }
    })
    .catch(err => {
        return res
            .status(500)
            .json({'error': 'Unable to verify the user'});
    })
}

const getUserProfile = (req,res) => {

    const headerAuth = req.headers['authorization'];
    const userId = jwtUtils.getUserId(headerAuth);

    if(userId < 0) {
        return res 
            .status(400)
            .json({
                'error': 'wrong token'
            })
    }

    Client.findOne({
        attributes: ['idClient','nom','prenom','email'],
        where: {idClient: userId}
    })
    .then( user => {
        if(user){
            res.status(201).json(user)
        }
        else {
            res.status(400).json({ 'error': 'user not found'})
        }
    })
    .catch(err =>  {
        res.status(500).json({ 'error': 'cannot fetch user'})
    })
}

const updateProfile = (req,res) => {

    // Getting auth header
    var headerAuth  = req.headers['authorization'];
    var userId      = jwtUtils.getUserId(headerAuth);

    // Params
    var nom = req.body.nom;

    asyncLib.waterfall([
      function(done) {
        Client.findOne({
          attributes: ['idClient', 'nom'],
          where: { idClient: userId }
        }).then(function (userFound) {
          done(null, userFound);
        })
        .catch(function(err) {
          return res.status(500).json({ 'error': 'unable to verify user' });
        });
      },
      function(userFound, done) {
        if(userFound) {
          userFound.update({
            nom: (nom ? nom : userFound.nom)
          }).then(function() {
            done(userFound);
          }).catch(function(err) {
            res.status(500).json({ 'error': 'cannot update user' });
          });
        } else {
          res.status(404).json({ 'error': 'user not found' });
        }
      },
    ], function(userFound) {
      if (userFound) {
        return res.status(201).json(userFound);
      } else {
        return res.status(500).json({ 'error': 'cannot update user profile' });
      }
    });

}

const getAllClients= (req,res) => {

    try  {
    Client.findAll()
        .then( data => {
            if(!data){
                return res
                    .status(400)
                    .json({
                        'message': 'No user in the database'
                    })
            }
            else {
                return res
                    .status(200)
                    .json({data})
            }
        })
    }
    catch (e) {
        return res
            .status(400)
            .json({
                'error': 'Error retrieving data'
            })
    }
}

module.exports = {createClient, getAllClients, login, getUserProfile, updateProfile} ;