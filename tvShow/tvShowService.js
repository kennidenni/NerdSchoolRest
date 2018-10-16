const TvShow = require('./TvShow');
class TvShowService {
  
  constructor() {
    this.tvShows = [new TvShow(1, 'Mr.Robot', 'Drama'), new TvShow(2, 'Black Mirror', 'Drama')];
  }
  // (You didn't copy & paste this, did you?)
  getAll() {
    return this.tvShows;
  }

  getById(thisId){
    return this.tvShows.find(tv => tv.id == thisId);
  }
}
module.exports = new TvShowService();