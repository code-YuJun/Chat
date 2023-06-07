import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'normalize.css'
import App from './App';

// redux toolkit
import { Provider } from 'react-redux';
import store from '@/store/index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);