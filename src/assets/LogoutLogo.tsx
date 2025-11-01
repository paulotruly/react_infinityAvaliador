const LogoutLogo = ({ fillColor = "white" }) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 120 120"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Fundo invisível, igual aos outros logos */}
    <rect
      x="10"
      y="10"
      width="100"
      height="100"
      rx="12"
      fill="none"
      stroke="transparent"
    />

    {/* Porta ou retângulo representando o sistema */}
    <rect
      x="30"
      y="35"
      width="35"
      height="50"
      rx="5"
      fill={fillColor}
      stroke={fillColor}
      strokeWidth="6"
    />

    {/* Seta de saída */}
    <path
      d="M65 60 H95 M85 50 L95 60 L85 70"
      stroke={fillColor}
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export default LogoutLogo;
