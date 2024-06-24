const Shipping = () => {
  return (
    <form>
      <h3 className="text-3xl font-bold mb-6">運送方式</h3>
      <div className="pb-6">
        <input
          id="standard"
          name="shipping"
          className="cursor-pointer hidden peer/standard"
          type="radio"
          value="standard"
        />
        <label
          className="border block py-2 px-16 border-gray-200 rounded-md peer-checked/standard:border-black relative after:content-[''] after:w-6 after:h-6 after:left-5 after:top-1/2 after:-translate-y-1/2 after:rounded-full  after:absolute after:border peer-checked/standard:after:border-8 after:border-black cursor-pointer"
          htmlFor="standard"
        >
          標準運送<span className="absolute right-5 text-sm top-3">免費</span>
          <br></br>
          <span className="text-sm">約3~7個工作天</span>
        </label>
      </div>
      <div className="pb-32">
        <input
          id="fast"
          name="shipping"
          className="cursor-pointer hidden peer/fast"
          type="radio"
          value="fast"
        />
        <label
          className="border block py-2 px-16 border-gray-200 rounded-md peer-checked/fast:border-black relative after:content-[''] after:w-6 after:h-6 after:left-5 after:top-1/2 after:-translate-y-1/2 after:rounded-full  after:absolute after:border peer-checked/fast:after:border-8 after:border-black cursor-pointer"
          htmlFor="fast"
        >
          DHL貨運<span className="absolute right-5 text-sm top-3">$500</span>
          <br></br>
          <span className="text-sm">48小時內到貨</span>
        </label>
      </div>
    </form>
  );
}

export default Shipping
