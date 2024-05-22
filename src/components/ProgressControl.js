import leftArrow from "../assets/icon/left-arrow.svg"
import "../styles/ProgressControl.css"

const ProgressControl = () => {
  return (
    <div className="progress-control">
      <button className="prev">
        <img src={leftArrow} alt="" />
        <p>上一步</p>
      </button>
      <button className="next">確認下單</button>
    </div>
  );
}

export default ProgressControl;