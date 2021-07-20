const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=c219439e62419e1ad13795257768931f&query=' +
    latitude +
    ',' +
    longitude +
    '&units=f';
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (response.body.error) {
      callback('Unable to find loaction!', undefined);
    } else {
      const temperature = response.body.current.temperature;
      const feelslike = response.body.current.feelslike;
      const weather_descriptions = response.body.current.weather_descriptions;
      callback(
        undefined,
        weather_descriptions +
          '. It is curently ' +
          temperature +
          ' degrees out. ' +
          'It feels like ' +
          feelslike +
          ' degrees out.'
      );
    }
  });
};

module.exports = forecast;
