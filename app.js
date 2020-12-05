const express = require('express');
const app = express();
const PORT = process.env.PORT;

app.set('view engine', 'ejs');
app.use('/assets', express.static('static'));

app.get('/',(req,res)=>{

    res.render('index');

});

app.listen(PORT,()=>console.info(`The server is running on port ${PORT}`));