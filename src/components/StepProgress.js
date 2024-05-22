import "../styles/StepProgress.css"

const StepProgress = () => {
  return (
    <div className="step-progress">
      <h2 className="register-title">結帳</h2>
      <div className="progress-container">
        <span className="progress-group" dataPhase="address">
          <span className="progress-icon">
            <span className="text">1</span>
          </span>
          <span className="progress-label">寄送地址</span>
        </span>
        <span className="progress-bar" dataOrder="1"></span>
        <span className="progress-group" dataPhase="shipping">
          <span className="progress-icon">
            <span className="text">2</span>
          </span>
          <span className="progress-label">運送方式</span>
        </span>
        <span className="progress-bar" dataOrder="2"></span>
        <span className="progress-group" dataPhase="credit-card">
          <span className="progress-icon">
            <span className="text">3</span>
          </span>
          <span className="progress-label">付款資訊</span>
        </span>
      </div>
    </div>
  );
}

export default StepProgress;