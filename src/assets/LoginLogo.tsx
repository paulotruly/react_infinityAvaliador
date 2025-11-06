const UserLogo = ({ fillColor = "white" }) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 120 120"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Círculo de fundo */}
    <circle cx="60" cy="60" r="50" fill={fillColor} />

    {/* Boneco transparente */}
    <circle cx="60" cy="40" r="15" fill="BLACK" />
    <rect x="40" y="60" width="40" height="40" rx="6" fill="BLACK" />
  </svg>
);

export default UserLogo;
