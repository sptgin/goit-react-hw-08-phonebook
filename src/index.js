import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Loader from 'react-loader-spinner';
import './index.css';
import App from './App';

import { store, perpsiststore } from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={perpsiststore}>
        <Router>
          <App />
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
