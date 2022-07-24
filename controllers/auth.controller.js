// pour l'inscription // connexion et déconnecion de l'utilisateur 

const UserModel = require('../models/user.model');

module.exports.signUp = async (req, res) => {
    console.log(req.body);
    const {pseudo, email, password} = req.body

    try{
        const user = await UserModel.create({pseudo, email, password});
        res.status(201).json({user: user._id});
    }
    catch (error){
        res.status(200).send({error})
    }
} 