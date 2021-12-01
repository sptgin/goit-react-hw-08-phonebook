import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../services/phonebook-api';
import selectors from '../redux/selectors';
import { setLogout } from '../redux/slice';
import { useNavigate } from 'react-router-dom';

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
      <Link to="/">
        {' '}
        <h1>Phonebook</h1>
      </Link>
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
    </div>
  );
}
