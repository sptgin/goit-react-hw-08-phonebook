import Section from '../components/Section';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactsList from '../components/ContactsList';

export default function Contacts() {
  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactsList />
      </Section>
    </>
  );
}
