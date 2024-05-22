import React from 'react';
import ReactDOM from 'react-dom/client';
import StepProgress from "./components/StepProgress";
import Step from "./components/Step";
import ProgressControl from "./components/ProgressControl";
import Main from './components/Main'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main>
      <StepProgress />
      <Step />
      <ProgressControl />
    </Main>
  </React.StrictMode>
);
