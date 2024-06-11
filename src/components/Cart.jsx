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
  const [cartProducts, setCartProducts] = useState([...products]);
  const newProductsData = [...cartProducts];
  // function handleClick(id, event) {
  //   const newProductsData =[...cartProducts]
  //   const index = newProductsData.findIndex(newProduct => newProduct.id === id)
  //   if(event.target.matches(".reduce")){
  //     if (newProductsData[index].quantity > 0){
  //       setCartProducts(
  //         ...cartProducts,
  //         newProductsData[index].quantity - 1
  //       );
  //   }} else {
  //     setCartProducts(...cartProducts, newProductsData[index].quantity + 1);
  //   }
  // }
  

const handleClick = {
   reduce(id) {
    const index = newProductsData.findIndex(
      (newProduct) => newProduct.id === id
    );
    if (newProductsData[index].quantity > 0) {
      setCartProducts(...cartProducts, newProductsData[index].quantity - 1);
    } else {
      setCartProducts(cartProducts.splice(index, 1));
    }
  },
  increase(id) {
    const index = newProductsData.findIndex(
      (newProduct) => newProduct.id === id
    );
    setCartProducts(...cartProducts, newProductsData[index].quantity + 1);
  }
};

 const subtotal = cartProducts.reduce((accumulator, product) => {
   return accumulator + product.price * product.quantity;
 }, 0);
  return (
    <div className="cart-container w-1/2 p-6">
      <h3 className="text-2xl font-medium">購物籃</h3>
      {cartProducts.map((product) => (
        <ProductItem key={product.id} product={product} handleClick={handleClick} />
      ))}
      <Divider />
      <Subtotal title="運費" price="免費" />
      <Divider />
      <Subtotal title="小計" price={subtotal} />
    </div>
  );
}

export default Cart