export default class GetBird {
  _flickr_API_KEY = `a4f5ca33cbde31647fdcc66c78b041b9`;  
  _apiBaseImg = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key='${this._flickr_API_KEY}&tagmode=all&extras=urlm&format=json&nojsoncallback&tags=`;
  _apiBaseAudio = '';

  async image(name){
    const response = await fetch(`${this._apiBaseImg}${name}`);
    return await response.json();
  }
}