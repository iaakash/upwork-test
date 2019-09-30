const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const { Service } = require( 'feathers-memory');

class contactsService extends Service {

  create(data) {
    data.created_at = new Date();

    return super.create(data);
  }
  find() {
    return super.find();
  }
  get(id) {
    return super.get(id);
  }
}

const app = express(feathers());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.configure(express.rest());

app.use('/contacts', new contactsService());

app.on('connection', con => {
  app.channel('everybody').join(con);
});

app.listen(3030).on('listening', () => {
  console.log('Feathers server listening on PORT 3030');
});
