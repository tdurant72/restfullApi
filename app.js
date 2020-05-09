const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');


//Middlewares
app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);


//Routes
app.get('/', (req, res)=>{
    res.send('Home Route')
})



//connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true,useUnifiedTopology: true  },()=>console.log('Connected to MongoDB'))

//listen
app.listen(3000);