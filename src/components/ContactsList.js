import ContactListItem from './ContactListItem';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from '../services/phonebook-api';
import Loader from '../components/Loader';
import './ContactsList.css';

export default function ContactsList() {
  const filter = useSelector(state => state.filter);
  const { data, isFetching } = useGetContactsQuery();
  return (
    <div>
      {isFetching && <Loader />}
      {data && !isFetching && (
        <ul className="contact__list">
          {data
            .filter(contact =>
              contact.name.toLocaleLowerCase().includes(filter.toLowerCase()),
            )
            .map(contact => (
              <ContactListItem
                className="contacts__list-item"
                key={contact.id}
                contact={contact}
              />
            ))}
        </ul>
      )}
    </div>
  );
}
