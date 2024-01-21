import "./style.scss";
import Lottie from "lottie-react";
import Influencer from "../../assets/animation/Influencer.json";
import { BrowserRouter as Router, Route, useNavigate } from "react-router-dom";

export default function Fren() {
  const navigate = useNavigate();
  return (
    <div className="page">
      <div className="container">
        <div className="page__content">
          <div
            style={{
              margin: "0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "36px",
            }}
          >
            <div
              style={{
                fontSize: "38px",
                fontWeight: "600",
                color: "#fff",
              }}
            >
              Frens zone
            </div>
          </div>
          <button
            onClick={() => {
              navigate("/party");
            }}
            style={{
              display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
              width: "100%",
              padding: "14px 12px",
              borderRadius: "14px",
              background: "rgba(255, 255, 255, 0.12)",
              backdropFilter: "blur(14px)",
              cursor: "pointer",
              marginTop: "16px",
            }}
          >
            <div
              style={{
                fontSize: "16px",
                fontWeight: "500",
                color: "var(--notcoin-orange)",
                marginRight: "6px",
              }}
            >
              +0
            </div>
            <div className="_coinIcon_55nwd_24"></div>
            <div className="_influencerIcon_55nwd_24"></div>
            <div
              style={{
                fontSize: "15px",
                fontWeight: "400",
                color: "#fff",
                marginTop: "2px",
                marginRight: "6px",
              }}
            >
              Top 300
            </div>
            <div
              style={{
                fontSize: "15px",
                fontWeight: "400",
                color: "rgb(112, 117, 121)",
                marginTop: "2px",
              }}
            >
              leaders
            </div>
            <div style={{
              position: "fixed",
              marginTop: "5px",
              right: "12px",
            }}>
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{flexShrink: "0", color: "rgb(112, 117, 121)"}}
              >
                <path
                  d="m1 1 5 5-5 5"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
