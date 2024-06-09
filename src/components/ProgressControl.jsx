import leftArrow from "../assets/icon/left-arrow.svg"
// import "../styles/ProgressControl.css"

const ProgressControl = () => {
  return (
    <div className="progress-control flex justify-between mt-5 pt-6 border-t border-[#e6e6eb]">
      <button className="prev mt-3 flex item-center">
        <img src={leftArrow} alt="prev-icon" />
        <p className="ml-4">上一步</p>
      </button>
      <button className="next w-40 h-12 rounded-lg text-white bg-[#F67599]">
        確認下單
      </button>
    </div>
  );
}

export default ProgressControl;