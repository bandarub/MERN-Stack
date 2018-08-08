//load the files we need
const   express = require('express'),
        bodyParser = require('body-parser'),
        mongoose = require('mongoose');
const app = express();
const students = require('./routes/api/students')
const path = require('path');

//body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB configuration
const db = require('./config/keys').mongoURI;

//connect to dB
mongoose
.connect(db)
.then(()=>console.log('mongodb connected....'))
.catch(err=>console.log(err));

//Use routes
app.use('/api/students',students);

app.use(express.static(path.join(__dirname,'client','build')))
app.get('*',(req, res) => res.sendFile(path.join(__dirname, 'client','build','index.html')));


//Define port
const port = process.env.PORT||5000;




app.listen(port, ()=> {
console.log(`Server is running on port ${port}....`)
});

