//===DEPENDENCIES=======================
const express = require('express');
const routes = require('./')
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("client/build"));

//===CONNECTING TO MONGODB======================================
mongoose.connect('mongodb+srv://Vlad:columbia20mongo@cluster0.xm9q3.mongodb.net/booksearch?retryWrites=true&w=majority', 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

mongoose.connection.once('open', function(){
  console.log('Connected to the database!');
}).on('error', function(error){
  console.log('Connection error:', error)
})


//===LISTENING THE SERVER========================================
app.listen(PORT, () =>{
    console.log(`API Server now listening on PORT: http://localhost${PORT}`);
});
