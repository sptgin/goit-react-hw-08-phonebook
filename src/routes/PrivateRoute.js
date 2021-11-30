import { Navigate } from 'react-router-dom';

export function PrivateRoute({ isAuth, component: ComponentForRoute }) {
  return <>{isAuth ? <ComponentForRoute /> : <Navigate to="/" />}</>;
}