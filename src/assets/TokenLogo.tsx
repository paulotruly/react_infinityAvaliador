const TokenLogo = ({ fillColor = "white" }) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 120 120"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Fundo invisível */}
    <rect
      x="10"
      y="10"
      width="100"
      height="100"
      rx="12"
      fill="none"
      stroke="transparent"
    />

    {/* Corpo do cadeado */}
    <rect
      x="40"
      y="55"
      width="40"
      height="40"
      rx="6"
      fill={fillColor}
      stroke={fillColor}
      strokeWidth="6"
    />

    {/* Arco superior do cadeado */}
    <path
      d="M50 55 V45 a10 10 0 0 1 20 0 V55"
      fill="none"
      stroke={fillColor}
      strokeWidth="6"
      strokeLinecap="round"
    />

    {/* Miolo da trava */}
    <circle
      cx="60"
      cy="60"
      r="4"
      fill={fillColor}
    />
  </svg>
);

export default TokenLogo;
