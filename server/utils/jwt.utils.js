const jwt = require('jsonwebtoken');

const JWT_SIGN_SECRET = '3fMb9hVjBIOGl1QQeDtrAVusJvojMKw4cXHXdrnXhOgftIWo';

module.exports = {
    generateTokenForUser: userData => {
        return jwt.sign({
            userId: userData.idClient
        },
        JWT_SIGN_SECRET,
        {
            expiresIn: '1h'
        })
    },
    parseAuth: (auth) => {
        return (auth != null) ? auth.replace('Bearer ', '') : null ;
    },
    getUserId: (auth) => {
        var userId = -1 ;
        const token = module.exports.parseAuth(auth);
        if(token){
            try {
                const jwtToken = jwt.verify(token, JWT_SIGN_SECRET);
                
                if(jwtToken){
                    userId = jwtToken.userId ;
                }
            }
            catch (err){}
        }
        return userId ;
    }
}