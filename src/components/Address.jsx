const Address = () => {
  return (
    <form className="address-information">
      <h3 className="form-title text-3xl font-bold mb-6">寄送地址</h3>
      <div className="form-input flex flex-wrap justify-between">
        <div className="mb-6 w-1/3">
          <label className="input-label inline-block mb-1.5 font-normal text-[#808080]">
            稱謂
          </label>
          <div className="relative after:content-['\25BC'] after:absolute after:top-1/2 after:right-8 after:-translate-y-1/2 after:-z-10">
            <select
              className="appearance-none text-base cursor-pointer pl-4 border border-black rounded-md w-11/12 h-10 bg-transparent"
              name="gender"
              id="gender"
            >
              <option>
                先生
              </option>
              <option>女士</option>
            </select>
          </div>
        </div>
        <div className="form-row code mb-6 w-2/3">
          <label className="input-label inline-block mb-1.5 font-normal text-[#808080]">
            姓名
          </label>
          <input
            className="text-base pl-4 block border border-black rounded-md w-11/12 h-10"
            type="text"
            placeholder="請輸入姓名"
          />
        </div>
        <div className="mb-6 w-3/6">
          <label className="input-label inline-block mb-1.5 font-normal text-[#808080]">
            電話
          </label>
          <input
            className="text-base pl-4 block border border-black rounded-md w-11/12 h-10"
            type="text"
            placeholder="請輸入電話"
          />
        </div>
        <div className="form-row code mb-6 w-3/6">
          <label className="input-label inline-block mb-1.5 font-normal text-[#808080]">
            Email
          </label>
          <input
            className="text-base pl-4 block border border-black rounded-md w-11/12 h-10"
            type="text"
            placeholder="請輸入電子郵件"
          />
        </div>
        <div className="mb-6 w-1/3">
          <label className="input-label inline-block mb-1.5 font-normal text-[#808080]">
            縣市
          </label>
          <div className="relative after:content-['\25BC'] after:absolute after:top-1/2 after:right-8 after:-translate-y-1/2 after:-z-10">
            <select
              className="appearance-none bg-transparent text-base cursor-pointer pl-4 border border-black rounded-md w-11/12 h-10"
              name="county/city"
              id="county/city"
            >
              <option value="" disable="true">
                請選擇縣市
              </option>
              <option >臺北市</option>
              <option >新北市</option>
              <option>桃園市</option>
              <option >臺中市</option>
              <option>臺南市</option>
              <option>高雄市</option>
              <option>基隆市</option>
              <option>新竹市</option>
              <option>嘉義市</option>
              <option>新竹縣</option>
              <option>苗栗縣</option>
              <option>彰化縣</option>
              <option>南投縣</option>
              <option>雲林縣</option>
              <option>嘉義縣</option>
              <option>屏東縣</option>
              <option>宜蘭縣</option>
              <option>花蓮縣</option>
              <option>臺東縣</option>
              <option>澎湖縣</option>
              <option>嘉義縣</option>
              <option>屏東縣</option>
              <option>宜蘭縣</option>
            </select>
          </div>
        </div>
        <div className="form-row code mb-6 w-2/3">
          <label className="input-label inline-block mb-1.5 font-normal text-[#808080]">
            地址
          </label>
          <input
            className="text-base pl-4 block border border-black rounded-md w-11/12 h-10"
            type="text"
            placeholder="請輸入地址"
          />
        </div>
      </div>
    </form>
  );
}

export default Address