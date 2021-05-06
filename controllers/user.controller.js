const bcrypt = require('bcryptjs');
const {response, request }= require('express');

const User = require('../models/users.model')

exports.createUser = async(req , res ) => {

    const {userName, pass, grandfather} = req.body;

    const user = new User(  {userName, pass, grandfather}  );
    //Encriptacionde la contraseña
    const salt = bcrypt.genSaltSync();
    user.pass = bcrypt.hashSync(pass, salt);
    //Guardado de datos
    await user.save();
    
    //Respuesta de la Base de Datos
    res.status(201).json({
        mensaje: 'Creado correctamente (POST)',
        user
    })
}
exports.getAllUsers = async(req = request, res = response) => {

    const user = await User.find();
    
    res.json({
        user
    });
}