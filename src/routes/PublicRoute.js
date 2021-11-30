import { Navigate } from 'react-router-dom';

export function PublicRoute({ isAuth, component: ComponentForRoute }) {
  return <>{isAuth ? <Navigate to="/contacts" /> : <ComponentForRoute />}</>;
}
