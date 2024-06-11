// import "../styles/ProductItem.css"
const ProductItem = ({product, handleClick}) => {
  return (
    <div key={product.id} className="my-8 flex relative">
      <img className="w-24 rounded-lg" src={product.img} alt="product-img" />
      <div className="ml-8">
        <span className="product-name">{product.name}</span>
        <div className="mt-4">
          <button
            className="reduce mr-12 w-6 h-6 text-center font-semibold bg-[#e5e5e5] rounded-full inline-block"
            onClick={() => handleClick.reduce(product.id)}
          >
            <svg
              className="mx-auto block"
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.37207"
                y="7.3999"
                width="1.8"
                height="10.8411"
                rx="0.9"
                transform="rotate(-90 0.37207 7.3999)"
                fill="black"
              />
            </svg>
          </button>
          <span className="mr-12">{product.quantity}</span>
          <button
            className="increase mr-12 w-6 h-6 font-semibold bg-[#e5e5e5] rounded-full inline-block"
            onClick={() => handleClick.increase(product.id)}
          >
            <svg
              className="mx-auto block"
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.77384 12.125C6.25283 12.125 6.64113 11.7367 6.64113 11.2577V7.31819H10.3762C10.8281 7.31819 11.1944 6.95188 11.1944 6.50001C11.1944 6.04814 10.8281 5.68182 10.3762 5.68182H6.64113V1.74229C6.64113 1.2633 6.25283 0.875 5.77384 0.875C5.29485 0.875 4.90655 1.2633 4.90655 1.74229V5.68182H1.17145C0.719584 5.68182 0.353271 6.04814 0.353271 6.50001C0.353271 6.95188 0.719584 7.31819 1.17145 7.31819H4.90655V11.2577C4.90655 11.7367 5.29485 12.125 5.77384 12.125Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
        <span className="font-bold absolute top-0 right-0">
          ${product.quantity * product.price}
        </span>
      </div>
    </div>
  );
};
export default ProductItem