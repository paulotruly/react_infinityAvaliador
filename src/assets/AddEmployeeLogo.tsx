const AddEmployeeLogo = ({ fillColor = "white" }) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 120 120"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Fundo invisível (mesmo estilo do DashboardLogo) */}
    <rect
      x="10"
      y="10"
      width="100"
      height="100"
      rx="12"
      fill="none"
      stroke="transparent"
    />

    {/* Cabeça do usuário */}
    <circle cx="50" cy="40" r="14" fill={fillColor} />

    {/* Corpo do usuário — mais largo e alto agora */}
    <path
      d="M25 90 C25 70, 75 70, 75 90 C75 100, 25 100, 25 90 Z"
      fill={fillColor}
    />

  </svg>
);

export default AddEmployeeLogo;
