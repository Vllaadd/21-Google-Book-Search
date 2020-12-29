//===DEPENDENCIES=======================
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(PORT, () =>{
    console.log(`API Server now listening on PORT: http://localhost${PORT}`);
});
