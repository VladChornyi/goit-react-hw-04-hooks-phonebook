import { useState } from 'react';
import s from './ContactsForm.module.css';

const ContactsForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNunber] = useState('');

  const onHandleSubmit = e => {
    e.preventDefault();
    addContact({ name, number });
    setName('');
    setNunber('');
  };

  const onHandleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNunber(value);
        break;
      default:
        break;
    }
  };

  return (
    <form className={s.form} onSubmit={onHandleSubmit}>
      <label className={s.title}>
        Name
        <input
          className={s.data}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={onHandleChange}
        />
      </label>
      <label className={s.title}>
        Number
        <input
          className={s.data}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={onHandleChange}
        />
      </label>

      <button className={s.addBtn} type="submit">
        add contact
      </button>
    </form>
  );
};

export default ContactsForm;
