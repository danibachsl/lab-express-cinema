const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    Movie.find()
        .then((response) => {
            res.render("movies.hbs", { response });
        })
        .catch((err) => {
            next(err);
        });
}); 

router.get('/movie/:id', (req, res, next) => {
    Movie.findById(req.params.id)
        .then((response) => {
            res.render("movies-details.hbs", { response });
        })
        .catch((err) => {
            next(err)
        })
})

module.exports = router;
