import { useState, useEffect } from 'react';
import ContactsForm from './contactsForm/ContactsForm';
import ContactsList from './contactsList/ContactsList';
import Filter from './filter/Filter';
import shortid from 'shortid';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (savedContacts) {
      setContacts(prev => [...prev, ...savedContacts]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = number => {
    const searchRepeat = contacts
      .map(user => user.name.toLowerCase())
      .includes(number.name.toLowerCase());

    if (searchRepeat) {
      alert(`${number.name} is already in contacts`);
    } else {
      const contact = {
        ...number,
        id: shortid.generate(),
      };
      setContacts(prev => [...prev, contact]);
    }
  };
  const changeFilter = filter => {
    setFilter(filter);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  const removeContact = contactId => {
    setContacts(prev => [...prev.filter(contact => contact.id !== contactId)]);
    return;
  };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactsForm addContact={addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChangeFilter={changeFilter} />
        <ContactsList contacts={getFilteredContacts()} onRemoveContact={removeContact} />
      </div>
    </>
  );
};

export default App;
