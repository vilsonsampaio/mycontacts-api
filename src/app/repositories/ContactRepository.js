const { v4: uuid } = require('uuid');

let contacts = [
  {
    id: uuid(),
    name: 'Vilson',
    email: 'vilson@mail.com',
    phone: '71999999999',
    category_id: uuid(),
  },
  {
    id: uuid(),
    name: 'José',
    email: 'jose@mail.com',
    phone: '11999999999',
    category_id: uuid(),
  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactRepository();
