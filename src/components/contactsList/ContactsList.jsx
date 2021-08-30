import s from './ContactsList.module.css';
import PropTypes from 'prop-types';

const ContactsList = ({ contacts, onRemoveContact }) => {
  return (
    <>
      <ul>
        {contacts?.map(contact => (
          <li key={contact.id}>
            {`${contact.name} : ${contact.number}`}
            <button
              className={s.delBtn}
              type="button"
              name="delete"
              onClick={() => onRemoveContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};
