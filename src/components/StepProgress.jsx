
const StepProgress = ({step1, step3}) => {
  return (
    <div className="step-progress mb-8">
      <h2 className="register-title text-3xl font-bold">結帳</h2>
      <div className="progress-container flex items-center justify-between mt-6">
        {/* step1 */}
        <span className="progress-group flex">
          {step1 ? (
            <svg
              className="mr-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" rx="12" fill="#2A2A2A" />
              <path
                d="M15.588 14.752V16H10.368V14.752H12.204V9.304L10.752 10.18L10.14 9.052L12.648 7.54H13.752V14.752H15.588Z"
                fill="white"
              />
            </svg>
          ) : (
            <svg
              className="mr-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1349_577)">
                <circle cx="12" cy="12" r="12" fill="#333333" />
                <path
                  d="M9.99991 16.1699L5.82991 11.9999L4.40991 13.4099L9.99991 18.9999L20.4999 8.49994L19.0899 7.08994L9.99991 16.1699Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1349_577">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          )}
          <span className="progress-label leading-7">寄送地址</span>
        </span>
        {/* progress-bar */}
        <span className="mx-2 max-w-16 grow border border-black border-solid"></span>
        {/* step2 */}
        <span
          className={`progress-group flex ${step1 ? "opacity-25" : ""}`}
        >
          {step3 ? (
            <svg
              className="mr-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1349_577)">
                <circle cx="12" cy="12" r="12" fill="#333333" />
                <path
                  d="M9.99991 16.1699L5.82991 11.9999L4.40991 13.4099L9.99991 18.9999L20.4999 8.49994L19.0899 7.08994L9.99991 16.1699Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1349_577">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          ) : (
            <svg
              className="mr-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="23"
                height="23"
                rx="11.5"
                stroke="#2A2A2A"
              />
              <path
                d="M15.564 14.752V16H9.876V14.86L12.756 11.764C13.092 11.396 13.336 11.06 13.488 10.756C13.648 10.444 13.728 10.136 13.728 9.832C13.728 9.448 13.616 9.16 13.392 8.968C13.176 8.768 12.856 8.668 12.432 8.668C11.672 8.668 10.908 8.96 10.14 9.544L9.624 8.416C9.96 8.12 10.388 7.884 10.908 7.708C11.436 7.524 11.964 7.432 12.492 7.432C13.34 7.432 14.012 7.64 14.508 8.056C15.004 8.472 15.252 9.032 15.252 9.736C15.252 10.224 15.148 10.684 14.94 11.116C14.732 11.54 14.38 12.016 13.884 12.544L11.808 14.752H15.564Z"
                fill="#2A2A2A"
              />
            </svg>
          )}
          <span className="progress-label leading-7">運送方式</span>
        </span>
        {/* progress-bar */}
        <span
          className={`${
            step1 ? "opacity-25" : ""
          } mx-2 max-w-16 grow border border-black border-solid`}
        ></span>
        {/* step3 */}
        <span className={`flex ${step3 ? "" : "opacity-25"}`}>
          <svg
            className="mr-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="23"
              height="23"
              rx="11.5"
              stroke="#2A2A2A"
            />
            <path
              d="M13.908 11.656C14.404 11.784 14.784 12.028 15.048 12.388C15.32 12.74 15.456 13.18 15.456 13.708C15.456 14.444 15.184 15.028 14.64 15.46C14.104 15.884 13.372 16.096 12.444 16.096C11.876 16.096 11.328 16.008 10.8 15.832C10.28 15.656 9.848 15.416 9.504 15.112L10.02 13.984C10.756 14.568 11.544 14.86 12.384 14.86C12.92 14.86 13.32 14.756 13.584 14.548C13.848 14.332 13.98 14.008 13.98 13.576C13.98 13.152 13.844 12.84 13.572 12.64C13.308 12.432 12.896 12.328 12.336 12.328H11.22V11.104H12.132C13.228 11.104 13.776 10.692 13.776 9.868C13.776 9.484 13.656 9.188 13.416 8.98C13.184 8.772 12.852 8.668 12.42 8.668C12.044 8.668 11.66 8.744 11.268 8.896C10.884 9.04 10.508 9.256 10.14 9.544L9.624 8.416C9.96 8.112 10.388 7.872 10.908 7.696C11.436 7.52 11.972 7.432 12.516 7.432C13.348 7.432 14.012 7.636 14.508 8.044C15.004 8.444 15.252 8.988 15.252 9.676C15.244 10.148 15.12 10.56 14.88 10.912C14.648 11.256 14.324 11.504 13.908 11.656Z"
              fill="#2A2A2A"
            />
          </svg>
          <span className="leading-7">付款資訊</span>
        </span>
      </div>
    </div>
  );
}

export default StepProgress;