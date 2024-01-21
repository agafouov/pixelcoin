import "./style.scss";
import Lottie from "lottie-react";
import Disco from "../../assets/animation/Disco.json";
import { BrowserRouter as Router, Route, useNavigate } from "react-router-dom";

export default function League() {
  const navigate = useNavigate();
  return (
    <div className="_layer_6spwk_16 _theme-bronze_6spwk_44">
      <div
        onClick={() => {
          navigate("/stats")
        }}
        style={{
          padding: "6px 14px",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "40px",
          background: "#fff6",
          backdropFilter: "blur(14px)",
          cursor: "pointer",
          marginTop: "14px",
          marginLeft: "14px",
          marginRight: "14px",
        }}
      >
        <div
          style={{
            fontSize: "15px",
            fontWeight: "600",
            lineHeight: "20px",
            color: "#000",
            marginLeft: "36px",
          }}
        >
          17,297,389 Pixelcoiners
        </div>
        {/* <div className="_ava_qytbf_11">
        </div> */}
      </div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px",
          }}
        >
          <div  className="_levelIcon_j4kjd_2">
          </div>
        </div>
      </div>
    </div>
  );
}
