const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Cors = require("cors");




const blogRoutes = require('./src/routes/blogRoutes');




// express app
const app = express();

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopolog: true
})

/*
var url = "mongodb+srv://nodeblog:nodeblog@nodeblog.eiaj0.mongodb.net/nodeblog?retryWrites=true&w=majority"

mongoose.connect(url, function(err, db){
    if(err){
        console.log('Não foi possível conectar ao mongo:' + err)
    }else{
        console.log('Conexão com o banco feito com sucesso')
    }
})

*/

//Conexão com Mongodb

/*
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
*/


/*
let dbURL = "mongodb+srv://nodeblog:nodeblog@nodeblog.eiaj0.mongodb.net/nodeblog?retryWrites=true&w=majority"
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    //.then((result) => app.listen(3000))
    //.catch((err) => console.log(err));

let MONGO_UR = dbURL.

*/
// register view engine
app.set('view engine', 'ejs');


// middleware for & static files
app.use(Cors());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(morgan('dev'));


app.get('/',(req, res)=>{
    res.redirect('/blogs');
});


app.get('/about', (req, res)=>{
    res.render('about', {title: 'About'});
});
//blog routes
app.use('/blogs', blogRoutes);


// 404 page
app.use((req, res)=>{
    res.status(404).render('404',{title:'404'});
});


app.listen(process.env.PORT || 3000);





/*
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


const http = require('http');
const server = http.Server(app);



server.listen(PORT,()=>{
    console.log(`Servidor Rodando na porta ${PORT}`)
});


*/