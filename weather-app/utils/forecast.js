const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=c219439e62419e1ad13795257768931f&query=' +
    latitude +
    ',' +
    longitude +
    '&units=m';
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (body.error) {
      callback('Unable to find loaction!', undefined);
    } else {
      const temperature = body.current.temperature;
      const feelslike = body.current.feelslike;
      const weather_descriptions = body.current.weather_descriptions;
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
