const {model, Schema} = require('mongoose')

const GrandfatherSchema = Schema({
    name:{
        type: String,
        trim: true,
        required: true,
    },
    code:{
        type: String,
        required: true
    }
})

GrandfatherSchema.methods.toJSON = function(){
    const {  __v, ...gf  } = this.toObject();
    return gf;
};
module.exports = model('Grandfather', GrandfatherSchema);