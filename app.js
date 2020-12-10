const geocode = require('./utils/geocode');

// const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHERSTACK_ACCESS_KEY}&query=37.8267,-122.423&units=f`;

// request({ url: url, json: true }, (err, response) => {
//   if (err) {
//     console.log('Unable to connect to Weather service');
//   } else if (response.body.error) {
//     console.log('Unable to find location');
//   } else {
//     const weather = response.body.current;
//     const temperature = weather.temperature;
//     const feelslike = weather.feelslike;
//     const weather_descriptions = weather.weather_descriptions[0];

//     console.log(
//       `The weather is ${weather_descriptions}. It is currently ${temperature} degrees outside. It feels like ${feelslike} degrees outside.`
//     );
//   }
// });

// Geocoding
// Address -> Lat/Long -> Weather

// const mapbox_url = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${process.env.MAPBOX_ACCESS_TOKEN}&limit=1`;

// request({ url: mapbox_url, json: true }, (err, response) => {
//   if (err) {
//     console.log('Unable to connect to location service');
//   } else if (
//     response.body.message === 'Not found' ||
//     response.body.features.length === 0
//   ) {
//     console.log('Unable to find location. Try another search.');
//   } else {
//     const mapbox = response.body.features[0];
//     const latitude = mapbox.center[1];
//     const longitude = mapbox.center[0];
//     const place_name = mapbox.place_name;

//     console.log(
//       `${place_name} is located at latitude ${latitude} and longitude ${longitude}.`
//     );
//   }
// });

geocode('Boston', (err, data) => {
  console.log('Error:', err);
  console.log('Data:', data);
});
