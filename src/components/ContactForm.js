import React from 'react';
import PropsType from 'prop-types';
import './ContactForm.css';
import { useForm } from 'react-hook-form';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from '../services/phonebook-api';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { data: contacts } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const onSubmit = data => {
    console.log(contacts);

    const checkContact = contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase(),
    );
    if (checkContact) {
      alert(`${data.name} is already exists`);
      return;
    } else {
      addContact(data);
      reset();
    }
  };

  return (
    <form className="contacts__form" onSubmit={handleSubmit(onSubmit)}>
      <label className="contcts__form-label">
        Name
        <input
          className="contcts__form-input"
          type="text"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          {...register('name', {
            required: true,
            pattern:
              /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
          })}
        />
        {errors?.name?.type === 'required' && <p>This field is required</p>}
        {errors?.name?.type === 'pattern' && (
          <p>Alphabetical characters only</p>
        )}
      </label>
      <label className="contcts__form-label">
        Phone
        <input
          className="contcts__form-input"
          type="tel"
          {...register('number', {
            required: true,
            pattern:
              /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
          })}
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        />
        {errors?.number?.type === 'required' && <p>This field is required</p>}
        {errors?.number?.type === 'pattern' && <p>Numeric characters only</p>}
      </label>
      <button className="contacts__form-button" type="submit">
        Add contact
      </button>
    </form>
  );
}

ContactForm.PropsType = {
  onSubmit: PropsType.func.isRequired,
};
