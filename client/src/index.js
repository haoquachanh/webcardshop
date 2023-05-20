import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import reduxStore from './redux';
import './index.css'

const { store, persistor } = reduxStore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <PersistGate persistor={persistor} loading={null} >
          <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

