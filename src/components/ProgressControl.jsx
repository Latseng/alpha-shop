import leftArrow from "../assets/icon/left-arrow.svg"
import rightArrow from "../assets/icon/right-arrow.svg"
import { useContext } from "react";
import CartContext from "./CartContext";
import CheckoutContext from "./CheckoutContext";


const ProgressControl = ({handleClick, step1, step3}) => {
  const cartData = useContext(CartContext);
  const checkoutData = useContext(CheckoutContext)
  return (
    <div className="progress-control flex justify-between mt-5 pt-6 border-t border-[#e6e6eb]">
      <button
        className={step1 ? "invisible" : "prev mt-3 flex"}
        onClick={() => handleClick("prev")}
      >
        <img src={leftArrow} alt="prev-icon" />
        <p className="ml-4">上一步</p>
      </button>
      <button
        className="next w-40 h-12 rounded-lg flex justify-evenly items-center text-white bg-[#F67599]"
        onClick={() =>
          handleClick("next", cartData.subtotal, checkoutData.cardInfo)
        }
      >
        {step3 ? (
          "確認訂單"
        ) : (
          <>
            <p className="ml-4">下一步</p>
            <img src={rightArrow} alt="next-icon" />
          </>
        )}
      </button>
    </div>
  );
}

export default ProgressControl;