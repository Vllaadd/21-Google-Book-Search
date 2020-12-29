//===DEPENDENCIES=======================
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

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


app.listen(PORT, () =>{
    console.log(`API Server now listening on PORT: http://localhost${PORT}`);
});
