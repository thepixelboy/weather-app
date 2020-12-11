const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if (!address) {
  console.log('Please, provide a location.');
} else {
  geocode(address, (error, data) => {
    if (error) {
      return console.log(error);
    }

    forecast(data.latitude, data.longitude, (error, weather) => {
      if (error) {
        return console.log(error);
      }

      console.log(
        `It's ${weather.weather_descriptions} in ${data.location}. The temperature outside is ${weather.temperature} degrees and it feels like ${weather.feelslike}.`
      );
    });
  });
}
