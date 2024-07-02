import { createContext } from "react";

const CheckoutContext = createContext({});

export function CheckoutProvider({ children }) {
   const cardInfo = {};

   function handleChange(value, inputInfo) {
     if (inputInfo === "name") {
       cardInfo.name = value;
     } else if (inputInfo === "card-number") {
       cardInfo.cardNumber = value;
     } else if (inputInfo === "date") {
       cardInfo.date = value;
     } else {
       cardInfo.CVC = value;
     }
     return cardInfo;
   }

  return (
    <CheckoutContext.Provider
      value={{
        handleChange: handleChange,
        cardInfo: cardInfo
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export default CheckoutContext;