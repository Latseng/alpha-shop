import ProductItem from "./ProductItem";
import Subtotal from "./Subtotal";
import Divider  from "./Divider";
import { useContext } from "react";
import CartContext  from "./components/CartContext";




const Cart = () => {  
  const cartData = useContext(CartContext)
  return (
      <div className="cart-container w-1/2 p-6">
        <h3 className="text-2xl font-medium">購物籃</h3>
        {cartData.cartProducts.map((product) => (
        <ProductItem key={product.id} product={product} handleClickReduce={cartData.handleClickReduce} handleClickIncrease={cartData.handleClickIncrease}/>
        ))}
        <Divider />
        <Subtotal title="運費" price="免費" />
        <Divider />
        <Subtotal title="小計" price={cartData.subtotal} />
      </div>
    
  );
}

export default Cart