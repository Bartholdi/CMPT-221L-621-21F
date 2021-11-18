let express = require('express');
let router = express.Router();
let Person = require('../models/person');
 
router.get("/", function (req, res) {
    res.render('HomePage');
});
 
router.get("/login", function(req, res) {
    res.render('login');
});
 
router.post("/login", function (req, res) {

    console.log(req.body.person);
   
    Person.create(req.body.person, function (err, person) {
        if (err) {
            console.error(err);
        } else {
            person
            .save()
            .then(person =>{
                //res.redirect('/');
                res.send("Item sent to the database");
            })
            .catch(err =>{
                res.status(400).send("unable to send to the database")
            })
        }
    })
   
})
 
module.exports = router;