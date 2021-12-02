import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../services/phonebook-api';
import selectors from '../redux/selectors';
import { setLogout } from '../redux/slice';
import { useNavigate } from 'react-router-dom';
import Section from './Section';
import './MainMenu.css';

export default function MainMenu() {
  const isLogged = useSelector(selectors.isLogin);
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
        <nav className="mainmenu__nav">
          <ul className="mainmenu__list">
            <li className="mainmenu__list-item">
              <Link className="mainmenu__link" to="/">
                Home
              </Link>
            </li>
            <li className="mainmenu__list-item">
              <Link className="mainmenu__link" to="/contacts">
                Phonebook
              </Link>
            </li>
          </ul>
          {!isLogged && (
            <ul className="mainmenu__loginlist">
              <li className="mainmenu__loginlist-item">
                <Link className="mainmenu__link" to="/login">
                  Login
                </Link>
              </li>
              <li className="mainmenu__loginlist-item">
                <Link className="mainmenu__link" to="/register">
                  Register
                </Link>
              </li>
            </ul>
          )}
          {isLogged && (
            <div>
              <button
                className="mainmenu__form-button"
                type="button"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </nav>
      </Section>
    </div>
  );
}
