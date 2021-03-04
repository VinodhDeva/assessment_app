var http = require('http');
var express = require('express');
var path = require('path');
var port = process.env.PORT || 8080;
var app = express();
var appRoutes = require('./routes/appRoutes');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

const url = "mongodb+srv://vinodh03111989:Dhanu@123@cluster0.s7nvi.mongodb.net/sampledb?retryWrites=true&w=majority";

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//setar pasta estatica
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', appRoutes);

http.createServer(app).listen(port);

console.log('Backend runing on port:', port);