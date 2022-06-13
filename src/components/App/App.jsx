import  ContactForm from '../ContactForm/ContactForm';
import  Filter from '../Filter/Filter';
import  ContactList  from '../ContactList/ContactList';
import { Section, TitleH1 } from './App.styled';

export function App() {
  // const [contacts, setContacts] = useState([
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ]);
  return (
    <>
      <Section>
        <TitleH1>Phonebook</TitleH1>
        <ContactForm />
      </Section>
      <Section>
        <TitleH1>Contacts</TitleH1>
        <Filter />
        <ContactList />
      </Section>
    </>
  );
}

export default App;
