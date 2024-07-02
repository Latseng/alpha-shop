import { useState } from "react";
import StepProgress from "./components/StepProgress";
import Address from "./components/Address";
import Shipping from "./components/Shipping";
import Payment from "./components/Payment";
import ProgressControl from "./components/ProgressControl";
import Main from "./components/Main";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart";
import { CartProvider } from "./components/CartContext";
import { CheckoutProvider } from "./components/CheckoutContext";


function App() {
  const [step, setStep] = useState(1)
  const step1 = step === 1;
  const step2 = step === 2;
  const step3 = step === 3;
  

  function handleClick (control, cartData, checkoutData) {
    if (control === "next"){
      if (step === 3){
        console.log(`小計：${cartData}`);
        console.log(checkoutData);
      } else {
        setStep (step + 1) 
      }
    } else {
      setStep(step - 1)
    } 
  }

  return (
    <Main>
      <CartProvider>
        <Checkout>
          <CheckoutProvider>
            <StepProgress step1={step1} step3={step3} />
            {step1 && <Address />}
            {step2 && <Shipping />}
            {step3 && <Payment />}
            <ProgressControl
              handleClick={handleClick}
              step1={step1}
              step3={step3}
            />
          </CheckoutProvider>
        </Checkout>
        <Cart />
      </CartProvider>
    </Main>
  );
}

export default App;