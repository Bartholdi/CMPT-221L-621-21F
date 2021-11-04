const express = require('express')
const app = express()
const port = 3000


app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({exteneded: true}));

app.get("/", function(req, res){

    res.render('index');

});

app.post("/login", function(req, res) {
    console.log(req.body.login);
    res.redirect('/signup');
});

app.get('/signup', function(req, res){
    res.render('main');
});

app.post("/signup", function(req, res) {
    console.log(req.body.signup);
    res.redirect('/');
});
 
app.listen(port, function() {
    console.log("listening 3000");
});
                        


