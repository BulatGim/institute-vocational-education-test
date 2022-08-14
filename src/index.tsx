import React, {createContext} from 'react';
import DisciplinesStore from "./store/disciplinesStore"
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {IContextTypes} from "./types/ContextTypes/ContextTypes";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


export const Context = createContext<IContextTypes | null>(null)




root.render(
  <React.StrictMode>
      <Context.Provider value={{
          disciplines: new DisciplinesStore(),
      }}>
          <App />
      </Context.Provider>
  </React.StrictMode>
);

reportWebVitals();
