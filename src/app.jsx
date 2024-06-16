// import { useState } from "react";
import StepProgress from "./components/StepProgress";
import Step3 from "./components/Step3";
import ProgressControl from "./components/ProgressControl";
import Main from "./components/Main";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart";

function App() {
  // const [step, setStep] = useState('step1')

  return (
    <Main>
      <Checkout>
        <StepProgress />
        <Step3 />
        <ProgressControl />
      </Checkout>
      <Cart />
    </Main>
  );
}

export default App;