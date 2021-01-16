var mongoose=require('mongoose');
mongoose.set('debug',true);
// mongoose.connect("mongodb://localhost:27017/portfolio-api",{useNewUrlParser:true, useUnifiedTopology:true});
mongoose.connect("mongodb+srv://admin:admin@cluster0.pnkcf.mongodb.net/portfolio-api?retryWrites=true&w=majority",{useNewUrlParser:true, useUnifiedTopology:true});

mongoose.Promise=Promise;
module.exports.Project=require('./projects')