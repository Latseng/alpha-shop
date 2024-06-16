import ProductItem from "./ProductItem";
import Subtotal from "./Subtotal";
import Divider  from "./Divider";
import { useState } from "react";

const products = [
  {
    id: "1",
    name: "貓咪罐罐",
    img: "https://picsum.photos/300/300?text=1",
    price: 100,
    quantity: 2,
  },
  {
    id: "2",
    name: "貓咪干干",
    img: "https://picsum.photos/300/300?text=2",
    price: 200,
    quantity: 1,
  },
];


const Cart = () => {  
  const [cartProducts, setCartProducts] = useState(products);
  const subtotal = cartProducts.reduce((accumulator, product) => {
    return accumulator + product.price * product.quantity;
  }, 0);

  // 處理購物車計算
  function handleClick(id, conrtol) {
    const newItems = cartProducts.map((product) => {
      if (product.id !== id) return product;

      const newQuantity = conrtol === 'increase' ? product.quantity + 1 : product.quantity - 1;

      return {
        ...product,
        quantity: newQuantity,
      };
    });

    const newCartProducts = newItems.filter(product => product.quantity > 0)
    setCartProducts(newCartProducts)
  }



  return (
    <div className="cart-container w-1/2 p-6">
      <h3 className="text-2xl font-medium">購物籃</h3>
      {cartProducts.map((product) => (
        <ProductItem key={product.id} product={product} onClick={handleClick} />
      ))}
      <Divider />
      <Subtotal title="運費" price="免費" />
      <Divider />
      <Subtotal title="小計" price={subtotal} />
    </div>
  );
}

export default Cart