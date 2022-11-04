const events = require("./events")
const { faker } = require('@faker-js/faker');
require('./manager')
require('./pilot')

events.on('new-flight', (data) => {
  console.log(`Flight {
  event: 'new-flight',
  time:  ${new Date().toUTCString()},
  Details: {
  airLine: ${data.airLine},
  destination: ${data.destination},
  pilot: ${data.pilot},
  flightID: ${data.flightID}
}`)
})
events.on('took-off', (data) => {
  console.log(`took-off {
  event: 'took-off',
  time:  ${new Date().toUTCString()},
  Details: {
  airLine: ${data.airLine},
  destination: ${data.destination},
  pilot: ${data.pilot},
  flightID: ${data.flightID}
}`)
})
events.on('arrived', (data) => {
  console.log(`arrived {
  event: 'arrived',
  time:  ${new Date().toUTCString()},
  Details: {
  airLine: ${data.airLine},
  destination: ${data.destination},
  pilot: ${data.pilot},
  flightID: ${data.flightID}
}`)
})

