'use strict'

const events = require('./events');
require('./manager');
require('./system');

events.on('new-flight', (data) => {
  setInterval(() => {
    events.emit('took-off', data);
    console.log(`Pilot: took-off flight with ID ${data.flightID}`);

  }, 5000);
  setInterval(() => {
    events.emit('arrived', data)
    console.log(`Pilot: Flight with ID ${data.flightID} is arrived`)
  }, 8000);
})