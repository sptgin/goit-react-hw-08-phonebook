import { useSelector, useDispatch } from 'react-redux';
import selectors from './redux/selectors';
import { useEffect } from 'react';
import { useGetCurrentUserQuery } from './services/phonebook-api';
import { setUser } from './redux/slice';
import './App.css';
import MainMenu from './components/MainMenu';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import Contacts from './pages/Contacts';
import { PublicRoute } from './routes/PublicRoute';
import { PrivateRoute } from './routes/PrivateRoute';

export default function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectors.isLogin);
  const token = useSelector(selectors.getToken);
  const { data } = useGetCurrentUserQuery('', {
    skip: token === null || (token && isAuth),
  });

  useEffect(() => {
    if (isAuth) return;
    data && dispatch(setUser(data));
  }, [data, dispatch, isAuth]);

  return (
    <div>
      <h1 className="header__main">React HW 008 Phonebook</h1>
      <MainMenu />
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
    </div>
  );
}
