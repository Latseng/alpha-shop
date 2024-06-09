// import "../styles/Step.css"

const Step = () => {
  return (
    <form className="payment-information">
      <h3 className="form-title text-3xl font-bold mb-6">付款資訊</h3>
      <div className="form-input flex flex-wrap justify-between">
        <div className="form-row card-name mb-6 w-full">
          <label className="input-label inline-block mb-1.5 font-normal text-[#808080]">
            持卡人姓名
          </label>
          <input
            className="text-base pl-4 block border border-black rounded-md w-3/4 h-10"
            type="text"
            placeholder="John Doe"
          />
        </div>
        <div className="form-row card-number mb-6 w-full">
          <label className="input-label inline-block mb-1.5 font-normal text-[#808080]">
            卡號
          </label>
          <input
            className="text-base pl-4 block border border-black rounded-md w-3/4 h-10"
            type="text"
            placeholder="1111 2222 3333 4444"
          />
        </div>
        <div className="form-row date mb-6 w-3/6">
          <label className="input-label inline-block mb-1.5 font-normal text-[#808080]">
            有效期限
          </label>
          <input
            className="text-base pl-4 block border border-black rounded-md w-11/12 h-10"
            type="text"
            placeholder="MM/YY"
          />
        </div>
        <div className="form-row code mb-6 w-3/6">
          <label className="input-label inline-block mb-1.5 font-normal text-[#808080]">
            CVC / CCV
          </label>
          <input
            className="text-base pl-4 block border border-black rounded-md w-11/12 h-10"
            type="text"
            placeholder="123"
          />
        </div>
      </div>
    </form>
  );
}

export default Step;