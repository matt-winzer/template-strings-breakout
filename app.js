$(document).ready(function() {
  var baseURL = 'https://galvanize-cors-proxy.herokuapp.com/http://api.brewerydb.com/v2/beers?key=';
  var apiKey = '53f372495b64d9d4e9a86e2a8ca999b4';

  $.get(baseURL + apiKey)
    .then(appendBeers);

});

function appendBeers(data) {
  var beers = data.data;
  console.log(data);

  for (var i = 0; i < beers.length; i++) {
    var beer = beers[i];

    $('.beers').append(
      //Note the back ticks used below at the very beginning and end of the entire string
      `<div class="col s12 m6 l4">
        <div class="card medium blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">${beer.name}</span>
            <p>${beer.description}</p>
          </div>
          <div class="card-action">
            <a href="#">ABV: ${beer.abv}</a>
            <a href="#">IBU: ${beer.ibu}</a>
          </div>
        </div>
      </div>`
    );
  }
}
