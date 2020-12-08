const request = require('postman-request');

const url =
  'http://api.weatherstack.com/current?access_key=APIKEY=37.8267,-122.4233&units=f';

request({ url: url, json: true }, (err, response) => {
  const weather = response.body.current;
  const temperature = weather.temperature;
  const feelslike = weather.feelslike;
  const weather_descriptions = weather.weather_descriptions[0];

  console.log(
    `${weather_descriptions} .It is currently ${temperature} degrees outside. It feels like ${feelslike} degrees outside.`
  );
});
