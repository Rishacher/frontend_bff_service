import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Theme, presetGpnDefault } from "@consta/uikit/Theme";
import './index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Theme className="App" preset={presetGpnDefault}>
        <App />
      </Theme>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
