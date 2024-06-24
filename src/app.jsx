import { useState } from "react";
import StepProgress from "./components/StepProgress";
import Address from "./components/Address";
import Shipping from "./components/Shipping";
import Payment from "./components/Payment";
import ProgressControl from "./components/ProgressControl";
import Main from "./components/Main";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart";

function App() {
  const [step, setStep] = useState(1)
  const step1 = step === 1;
  const step2 = step === 2;
  const step3 = step === 3;

  function handleClick (control) {
    if (control === "next"){
      if (step === 3){
        return
      } else {
        setStep (step + 1) 
      }
    } else {
      setStep(step - 1)
    }
  }

  return (
    <Main>
      <Checkout>
        <StepProgress step1={step1} step3={step3}/>
        {step1 && <Address />}
        {step2 && <Shipping />}
        {step3 && <Payment />}
        <ProgressControl
          handleClick={handleClick}
          step1={step1}
          step3={step3}
        />
      </Checkout>
      <Cart />
    </Main>
  );
}

export default App;