var express = require('express');
var router=express.Router();
var db=require('../models/index')
var helpers=require('../helpers/projects');

router.route('/')
    .get(helpers.getProjects)
    .post(helpers.createProjects)
router.route('/:projectId')
    .get(helpers.showProject)
    .put(helpers.updateProject)
    .delete(helpers.deleteProject)

module.exports=router;