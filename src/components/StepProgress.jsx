
const StepProgress = () => {
  return (
    <div className="step-progress mb-8">
      <h2 className="register-title text-3xl font-bold">結帳</h2>
      <div className="progress-container flex items-center justify-between mt-6">
        <span className="progress-group flex" dataPhase="address">
          <span className="progress-icon w-7 h-7 mr-2 border border-black rounded-full text-center">
            1
          </span>
          <span className="progress-label leading-7">寄送地址</span>
        </span>
        <span
          className="progress-bar mx-2 max-w-16 grow border border-black border-solid"
          dataOrder="1"
        ></span>
        <span className="progress-group flex" dataPhase="shipping">
          <span className="progress-icon w-7 h-7 mr-2 border border-black rounded-full text-center">
            2
          </span>
          <span className="progress-label leading-7">運送方式</span>
        </span>
        <span
          className="progress-bar mx-2 max-w-16 grow border border-black border-solid"
          dataOrder="2"
        ></span>
        <span className="progress-group flex" dataPhase="credit-card">
          <span className="progress-icon w-7 h-7 mr-2 border border-black rounded-full text-center">
            3
          </span>
          <span className="progress-label leading-7">付款資訊</span>
        </span>
      </div>
    </div>
  );
}

export default StepProgress;