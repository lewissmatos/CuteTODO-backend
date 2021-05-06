const {response, request }= require('express');

const Grandfather = require('../models/grandfathers.model')

exports.createGrandfather = async(req = request, res =response) => {
    const {name, code} = req.body

    const gf = new Grandfather({name, code})

    await gf.save()

    res.status(201).json({
        mensaje: 'Creado correctamente (POST)',
        gf
    })
}

exports.getAllGrandfathers = async (req= request, res=response) => {

    const gf = await Grandfather.find()

    res.json({
        gf
    })
}