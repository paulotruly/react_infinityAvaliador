const DashboardLogo = ({fillColor = "white"}) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 120 120"
    xmlns="http://www.w3.org/2000/svg"
    style={{  }}
  >
    <rect x="10" y="10" width="100" height="100" rx="12" fill="none" stroke="transparent" />
    <path
      d="M30 40 H90 V50 H30 Z M30 60 H70 V70 H30 Z M30 80 H50 V90 H30 Z"
      fill={fillColor}
      strokeWidth="2"
    />
  </svg>
);

export default DashboardLogo;
