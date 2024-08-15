import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <div className="logo">
      <img
        src="/Logo.png"
        alt="logo"
        onClick={() => navigate("/")}
        style={{
          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default Logo;
