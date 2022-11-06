
const io = require('socket.io')(3002);
const airline_io = io.of('/airline')

io.on('connection', (socket) => {
  socket.on('new-flight', (data) => {
    io.emit('new-flight', data);
    console.log(`Flight {
          event: 'new-flight',
          time: ${new Date().toUTCString()},
          Details: {
              airline: '${data.airline}',
              flightID: '${data.flightID}',
              pilot: '${data.pilot}',
              destination: '${data.destination}',
          }
      }`);
  });
  socket.on('arrived', (data) => {
    io.emit('arrived', data);
    console.log(`Flight {
          event: 'arrived',
          time: ${new Date().toUTCString()},
          Details: {
              airline: '${data.airline}',
              flightID: '${data.flightID}',
              pilot: '${data.pilot}',
              destination: '${data.destination}',
          }
      }`);
  });
});


airline_io.on('connection', (socket) => {
  console.log('airline connected')
  socket.on('took-off', (data) => {
    console.log(`Flight{
    event: 'took-off',
    time:  ${new Date().toUTCString()},
    Details: {
      airLine: ${data.airLine},
      flightID: ${data.flightID}
      pilot: ${data.pilot},
      destination: ${data.destination},
    }
  }`)
  })
})



