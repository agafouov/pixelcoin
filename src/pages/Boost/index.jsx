import "./style.scss";
import { BrowserRouter as Router, Route, useNavigate } from "react-router-dom";

export default function Boost() {
  const navigate = useNavigate();
  return (
    <div className="_layer_6spwk_15 _theme-yellow_6spwk_65">
      <div
        style={{
          margin: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              color: "var(--palette-transparent-white-80)",
              fontSize: "16px",
              fontWeight: "400",
              marginTop: "45px",
            }}
          >
            Your balance
          </div>
        </div>
      </div>
      <div
        style={{
          margin: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "2px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="_scoreIcon_55nwt_10"></div>
          <div style={{ color: "#fff", fontSize: "50px", fontWeight: "700" }}>
            10,000
          </div>
        </div>
      </div>
      <div
        style={{
          margin: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "2px",
        }}
      >
        <div
          onClick={() => {
            navigate("/about");
          }}
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer"
          }}
        >
          <div
            style={{
              color: "#0a84ff",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            How boost works
          </div>
        </div>
      </div>
    </div>
  );
}
