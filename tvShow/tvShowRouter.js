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

module.exports = tvShowRouter;