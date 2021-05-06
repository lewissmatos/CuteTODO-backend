const {model, Schema} = require('mongoose')

const UserSchema = Schema({
    userName:{
        type: String,
        trim: true,
        required: true,
    },
    pass:{
        type: String,
        trim: true,
        required: true,
    },
    birthday:{
        type: String,
        default: '00/00/0000'
    },
    grandfather: {
        required: [true, 'Solo existen 2 padrinos, Lewis y Eiron'],
        type: String,
        enum: ['Lewis', 'Eiron']
    }
})

UserSchema.methods.toJSON = function(){
    const {  __v, pass, _id, ...user  } = this.toObject();
    return user;
};

module.exports = model('User', UserSchema)
