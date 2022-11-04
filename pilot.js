const events = require('./events')
require('./manager')

events.on('new-flight', (data) => {
  setTimeout(() => {
    console.log(`Pilot: flight with ID '${data.pilot}' took-off`)
    events.emit('took-off', data);
  }, 4000)
  setTimeout(() => {
    console.log(`Pilot: flight with ID '${data.pilot}' arrived`)
    events.emit('arrived', data);
  }, 7000)
});

