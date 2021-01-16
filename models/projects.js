var mongoose = require('mongoose');
var projectSchema=new mongoose.Schema({
    title:{
        type:String,
        // required:'Title cannot be blank!'
    },
    description:{
        type:String,
        // required:true
    },
    created:{
        type:Date,
        default:Date.now
    },
    url:{
        type:String,
        // required: true
    },
    readMore:{
        type:String
    },
    thumbnail:{
        type:String
    }
})

const Project=mongoose.model('Project',projectSchema)
module.exports =Project;