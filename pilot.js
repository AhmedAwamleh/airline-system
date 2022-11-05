const io = require('socket.io-client')
const host = "http://localhost:3002";
const hostAirline = "http://localhost:3002/airline"
const socketAir = io.connect(`http://localhost:3002/airline`)
const socket = io.connect(host)


console.log('anything')
socket.on('new-flight', (data) => {
  setTimeout(() => {
    console.log(`Pilot: flight with ID '${data.pilot}' took-off`)
    socketAir.emit('took-off', data);
  }, 4000)
  setTimeout(() => {
    console.log(`Pilot: flight with ID '${data.pilot}' arrived`)
    socket.emit('arrived', data);
  }, 7000)
});

