const request = require('postman-request');

const url =
  'http://api.weatherstack.com/current?access_key=APIKEY=37.8267,-122.4233';

request({ url: url }, (err, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});
