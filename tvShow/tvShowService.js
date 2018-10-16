const TvShow = require('./TvShow');
const createId = require('../utils/idUtil');

class TvShowService {
  
  constructor() {
    this.tvShows = [new TvShow(createId(), 'Mr.Robot', 'Drama'), new TvShow(createId(), 'Black Mirror', 'Drama')];
  }
  // (You didn't copy & paste this, did you?)
  getAll() {
    return this.tvShows;
  }

  getById(thisId){
    return this.tvShows.find(tv => tv.id == thisId);
  }

  createTvShow(name, genre) {
    let newTvShow = new TvShow(createId(), name, genre); 
    this.tvShows.push(newTvShow)
    return newTvShow
  }
}
module.exports = new TvShowService();