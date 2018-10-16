const express = require('express');
const TvShow = require('./TvShow');
const tvShowService = require('./tvShowService');

const tvShowRouter = express.Router();

tvShowRouter.get('/', (req, res) => {
    res.json(tvShowService.getAll());
});

tvShowRouter.route('/:tvShowId').get((req, res) => {
    const id = req.params.tvShowId
    const tvShow = tvShowService.getById(id) 
    console.log("Fetching TV Show with id: " + id);
    res.json(tvShow);
});

tvShowRouter.post('/', (req, res) => {
    const name = req.body.name
    const genre = req.body.genre
    const newTvShow = tvShowService.createTvShow(name, genre)
    console.log(newTvShow);
    res.send(newTvShow);
});

module.exports = tvShowRouter;