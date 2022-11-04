const events = require('./events')
const { faker } = require('@faker-js/faker');


setInterval(() => {
  let data = {

    airLine: 'Royal Jordanian Airlines',
    destination: faker.address.city(),
    pilot: faker.name.fullName(),
    flightID: faker.datatype.uuid()

  }
  console.log(`Manager: A filght with ID ${data.pilot} has been scheduled`);
  events.emit('new-flight', data);

}, 10000)


events.on('arrived', (data) => {
  console.log(`Manager: were greatly thankful for the amazing flight, ${data.pilot}`)
});