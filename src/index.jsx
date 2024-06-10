import React from 'react';
import ReactDOM from 'react-dom/client';
import StepProgress from "./components/StepProgress";
import Step from "./components/Step";
import ProgressControl from "./components/ProgressControl";
import Main from "./components/Main";
import { Checkout } from './components/Checkout';
import Cart from './components/Cart';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main>
      <Checkout>
        <StepProgress />
        <Step />
        <ProgressControl />
      </Checkout>
      <Cart />
    </Main>
  </React.StrictMode>
);