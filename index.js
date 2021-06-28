const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} = require('./contacts');
const { program } = require('commander');
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');
program.parse(process.argv);
const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      console.table(await listContacts());
      break;

    case 'get':
      console.table(await getContactById(id));
      break;

    case 'add':
      await addContact(name, email, phone);
      console.log('Contact added: ');
      console.table(await listContacts());
      break;

    case 'remove':
      await removeContact(id);
      console.log('Contact removed: ');
      console.table(await listContacts());
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
