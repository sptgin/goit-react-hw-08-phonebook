import Section from './components/Section';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactsList from './components/ContactsList';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Contacts } from './pages/Contacts';
import { PublicRoute } from './routes/PublicRoute';
import { PrivateRoute } from './routes/PrivateRoute';

export default function App() {
  const isAuth = true; //useSelector(selectors.isLogin);
  return (
    <div>
      <h1 className="header__main">React HW 008 Phonebook</h1>
      <Section title="">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contacts">Phonebook</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
      </Section>
      <main>
        <Routes>
          <Route
            path="/"
            element={<PublicRoute isAuth={isAuth} component={Home} />}
          />
          <Route
            path="/login"
            element={<PublicRoute isAuth={isAuth} component={Login} />}
          />
          <Route
            path="/register"
            element={<PublicRoute isAuth={isAuth} component={Register} />}
          />
          <Route
            path="/contacts"
            element={<PrivateRoute isAuth={isAuth} component={Contacts} />}
          />
        </Routes>
      </main>

      {/* <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactsList />
      </Section> */}
    </div>
  );
}
