const express = require('express')
const app = express();
const cookieParser = require('cookie-parser')
const bodyParser = require("body-parser");
const cors = require('cors');
const routes = require('./routes/routes')

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));


const allowOrigin = ['http://localhost:3000', `${process.env.BASE_URL}`];

app.use(cors({
    origin:allowOrigin, 
    credentials:true
}))

app.use('/',routes);
app.get('*',(req,res)=>{
    res.send(`<h1>Sorry, Page is not Found Error <span style="color:red">404</span></h1>`)
})

module.exports = app;