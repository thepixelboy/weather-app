const request = require('postman-request');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHERSTACK_ACCESS_KEY}&query=${longitude},${latitude}&units=f`;

  request({ url: url, json: true }, (err, response) => {
    if (err) {
      callback('Unable to connect to weather service');
    } else if (response.body.error) {
      callback('Unable to find location');
    } else {
      const weather = response.body.current;
      const temperature = weather.temperature;
      const feelslike = weather.feelslike;
      const weather_descriptions = weather.weather_descriptions[0];

      callback(undefined, {
        temperature: temperature,
        feelslike: feelslike,
        weather_descriptions: weather_descriptions,
      });
    }
  });
};

module.exports = forecast;
