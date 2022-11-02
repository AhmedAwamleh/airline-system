require('./manager');
require('./pilot');
const events = require('./events');
const { faker } = require('@faker-js/faker');


events.on('new-flight', (data) => {
  console.log(`Flight {
  event: 'new-flight',
  time:  ${faker.date.past()},
  Details: {
  airLine: ${data.airLine},
  destination: ${data.destination},
  pilot: ${data.pilot},
  flightID: ${data.flightID}
}`)
})

events.on('took-off', (data) => {
  console.log(`Flight {
      event: 'took_off',
      time:  ${faker.date.past()},)},
      Details: {
      airLine: ${data.airline},
      destination: ${data.destination},
      pilot: ${data.pilot},
      flightID: ${data.flightID}
  }`)
})

events.on('arrived', (data) => {
  console.log(`Flight {
      event: 'arrived',
      time:  ${faker.date.past()},)},
      Details: {
      airLine: ${data.airline},
      destination: ${data.destination},
      pilot: ${data.pilot},
      flightID: ${data.flightID}
  }`)
})