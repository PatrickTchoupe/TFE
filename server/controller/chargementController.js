const Chargement=require('../models/Chargement');

const addChargement = async (req, res) => {

    const reqBody = {...req.body};

    const toto = await Chargement.create(reqBody);

    return res
        .status(200)
        .json({chargement: toto});
};

const getAllShip= (req,res) => {

    try  {
        Chargement.findAll()
            .then( data => {
                if(!data){
                    return res
                        .status(400)
                        .json({
                            'message': 'No shipment in the database'
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

module.exports = {addChargement, getAllShip} ;