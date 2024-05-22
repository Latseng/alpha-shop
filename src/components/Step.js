import "../styles/Step.css"

const Step = () => {
  return (
    <form className="payment-information">
      <h3 className="form-title">付款資訊</h3>
      <div className="form-input">
        <div className="form-row card-name">
          <label className="input-label">持卡人姓名</label>
          <input type="text" placeholder="John Doe" />
        </div>
        <div className="form-row card-number">
          <label className="input-label">卡號</label>
          <input type="text" placeholder="1111 2222 3333 4444" />
        </div>
        <div className="form-row date">
          <label className="input-label">有效期限</label>
          <input type="text" placeholder="MM/YY" />
        </div>
        <div className="form-row code">
          <label className="input-label">CVC / CCV</label>
          <input type="text" placeholder="123" />
        </div>
      </div>
    </form>
  );
}

export default Step;