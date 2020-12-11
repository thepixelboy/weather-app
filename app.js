const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

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

// geocode('Boston', (err, data) => {
//   console.log('Error:', err);
//   console.log('Data:', data);
// });

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(-75.7088, 44.1545, (error, data) => {
  console.log('Error:', error);
  console.log('Data:', data);
});
