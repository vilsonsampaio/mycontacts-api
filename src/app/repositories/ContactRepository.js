const { v4: uuid } = require('uuid');

const contacts = [
  {
    id: uuid(),
    name: 'Vilson',
    email: 'vilson@mail.com',
    phone: '71999999999',
    category_id: uuid(),
  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => { resolve(contacts); });
  }
}

module.exports = new ContactRepository();
