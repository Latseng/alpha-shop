import ProductItem from "./ProductItem";
import { useState } from "react";

const Cart = () => {
  const [amount, setAmount] = useState(1);
  function handleClick(event) {
    console.log(event.target)
    if (event.target.matches("button")) {
      if (event.target.matches(".reduce")) {
        setAmount(amount - 1);
      } else {
        setAmount(amount + 1);
      }
    }
  }
  return (
    <div className="cart-container w-1/2 p-6">
      <h3 className="text-2xl font-medium">購物籃</h3>
      <ProductItem amount={amount} handleClick={handleClick}/>
      <div className="my-8 py-8 border-t border-[#F0F0F5] flex justify-between">
        <span>運費</span>
        <span className="font-bold">免費</span>
      </div>
      <div className=" my-8 py-8 border-t border-[#F0F0F5] flex justify-between">
        <span>小計</span>
        <span className="font-bold">$5298</span>
      </div>
    </div>
  );
}

export default Cart