import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../services/phonebook-api';
import selectors from '../redux/selectors';
import { setLogout } from '../redux/slice';
import { useNavigate } from 'react-router-dom';
import Section from './Section';

export default function MainMenu() {
  const isLogged = useSelector(selectors.isLogin);
  console.log(isLogged);
  const name = useSelector(selectors.getName);
  const [logOut] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    logOut();
    dispatch(setLogout());
    navigate('/');
  };
  return (
    <div>
      <Section title="">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contacts">Phonebook</Link>
            </li>
          </ul>
          {!isLogged && (
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>

              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          )}
        </nav>
        {isLogged && (
          <div>
            <p>
              Hello, <span>{name}</span>
            </p>
            <button type="button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </Section>
    </div>
  );
}
