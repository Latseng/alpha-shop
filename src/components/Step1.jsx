const Step1 = () => {
  return (
    <div>
      <form className="payment-information">
        <h3 className="form-title text-3xl font-bold mb-6">寄送地址</h3>
        <div className="form-input flex flex-wrap justify-between">
          
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
    </div>
  );
}

export default Step1