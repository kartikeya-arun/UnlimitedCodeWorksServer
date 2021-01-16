const db=require('../models')
exports.getProjects=function(req,res){
    db.Project.find({})
    .then(function(projects){
        res.json(projects);
    })
    .catch(function(err){
        res.send(err)
    })
}

exports.createProjects=function(req,res){
    db.Project.create(req.body)
    .then(function(newProject){
        res.status(201).json(newProject);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.showProject=function(req,res){
    db.Project.findById(req.params.projectId)
    .then(function(foundProject){
        res.json(foundProject)
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.updateProject=function(req,res){
    db.Project.findOneAndUpdate(
                                    {_id:req.params.projectId},
                                    req.body,
                                    {new:true}
                                )
    .then(function(project){
        res.json(project)
    })
    .catch(function(err){
        res.send(err)
    })
}

exports.deleteProject=function(req,res){
    db.Project.remove({_id:req.params.projectId})
    .then(function(){
        res.json({message:'Removed Successfully!'});
    })
    .catch(function(err){
        res.send(err);
    })
}
module.exports=exports