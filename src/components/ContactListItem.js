import PropTypes from 'prop-types';
import './ContactListItem.css';
import { useDelContactMutation } from '../services/phonebook-api';

export default function ContactListItem({ contact }) {
  const [deleteContact] = useDelContactMutation();
  return (
    <li className="contact__list-item">
      <div>
        {contact.name}: {contact.number}
      </div>
      <button
        className="contact__list-delete-button"
        type="submit"
        id={contact.id}
        onClick={() => deleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
}

ContactListItem.prototype = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
