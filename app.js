const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if (!address) {
  console.log('Please, provide a location.');
} else {
  geocode(address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log(error);
    }

    forecast(
      latitude,
      longitude,
      (error, { weather_descriptions, temperature, feelslike } = {}) => {
        if (error) {
          return console.log(error);
        }

        console.log(
          `It's ${weather_descriptions} in ${location}. The temperature outside is ${temperature} degrees and it feels like ${feelslike}.`
        );
      }
    );
  });
}
