
// nämä tarvitaan express kirjaston käyttöä varten
const express = require('express');
const app = express();

// täältä etsii tiedostoja sitten
app.use(express.static('public'));

// kun joku kirjottaa urlin niin tarjoaa tätä
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/reincsim.html');
});

// kuuntelee katteleeko joku tätä
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
