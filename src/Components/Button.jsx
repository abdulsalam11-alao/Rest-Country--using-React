import { useNavigate } from "react-router-dom";
import "./Button.css";

function Button() {
  const navigate = useNavigate();
  return (
    <div className="button" onClick={() => navigate(-1)}>
      <span>&larr;</span>
      Back
    </div>
  );
}

export default Button;
