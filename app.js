const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const app=express();
const projectRoutes=require('./routes/projects')

app.use(bodyParser.json());
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));

app.get('/',(req,res)=>{
    res.send('Sup biches!!')
})

app.use('/api/projects',projectRoutes);
const port=process.env.PORT||8080;
app.listen(port,()=>{
    console.log(`Server is listening on port ${port}!`)
})