import { useState, createContext } from "react";

const CartContext = createContext({})

export function CartProvider({ children }){
  let products = [
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

  const [cartProducts, setCartProducts] = useState(products);
  const subtotal = cartProducts.reduce((accumulator, product) => {
    return accumulator + product.price * product.quantity;
  }, 0);

  function handleClickReduce(id) {
    const newProductItem = cartProducts.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          quantity: product.quantity - 1,
        };
      } else {
        return product;
      }
    });
    setCartProducts(newProductItem.filter((product) => product.quantity > 0));
  }

  function handleClickIncrease(id) {
    const newProductItem = cartProducts.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      } else {
        return product;
      }
    });
    setCartProducts(newProductItem);
  }

  return (
    <CartContext.Provider value={{
      cartProducts: cartProducts,
      subtotal: subtotal,
      handleClickIncrease: handleClickIncrease,
      handleClickReduce: handleClickReduce
      }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext;