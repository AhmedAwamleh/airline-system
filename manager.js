'use strict';

const events = require('./events');
const crypto = require('crypto');


var id = crypto.randomUUID()

events.on('new-flight', newFlight);
events.on('took_off', tookOff)
events.on('arrived', arrived)
events.on('msg', msg)


function newFlight() {
  var d = new Date()
  var datetime = d.toLocaleString();
  const Flight = {
    Manager: `new flight with ID ${id} have been scheduled`,
    Flight: {
      event: 'flight',
      airLine: 'Royal Jordanian Airlines',
      time: datetime,
      Details: {
        destination: 'Manchester, UK',
        pilot: 'Jane doe',
        flightID: id,
      }

    }
  }
  console.log(Flight)

}
function tookOff() {
  var d = new Date()
  var datetime = d.toLocaleString();
  const Flight = {
    Pilot: `flight with ID ${id} took-of`,
    Flight: {
      event: 'took-Off',
      airLine: 'Royal Jordanian Airlines',
      time: datetime,
      Details: {
        destination: 'Manchester, UK',
        pilot: 'Jane doe',
        flightID: id,
      }

    }
  }

  console.log(Flight)

}
function arrived() {
  var d = new Date()
  var datetime = d.toLocaleString();
  const Flight = {
    Pilot: `flight with ID ${id} has arrived`,
    Flight: {
      event: 'arrived',
      airLine: 'Royal Jordanian Airlines',
      time: datetime,
      Details: {
        destination: 'Manchester, UK',
        pilot: 'Jane doe',
        flightID: id,

      }


    }
  }

  console.log(Flight)
  events.emit('msg');
}

function msg() {
  console.log(" Manager: we’re greatly thankful for the amazing flight, Jane doe")
}



events.emit('new-flight');
events.emit('took_off');
events.emit('arrived');

setInterval(() => {
  events.emit('new-flight')
}, 10000);


setInterval(() => {
  events.emit('took_off')
}, 14000);

setInterval(() => {
  events.emit('arrived')
}, 17000);