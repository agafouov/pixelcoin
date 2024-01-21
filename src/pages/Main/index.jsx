import React from "react";
import Lottie from "lottie-react";
import { BrowserRouter as Router, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./style.scss";

// import Field from "../../components/Field";
// import ProgressBar from "../../components/ProgressBar";

export default function Main() {
  const navigate = useNavigate();
  return (
    <div className="page">
      {/* <div className="_background_lkckw_27 _skin-league-2_lkckw_187"></div> */}
      <div className="container">
        <div className="page__content">
          <button
            onClick={() => {
              navigate("/squad");
            }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              padding: "14px 12px",
              borderRadius: "14px",
              background: "rgba(255, 255, 255, 0.12)",
              backdropFilter: "blur(14px)",
              cursor: "pointer",
            }}
          >
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
                    color: "#fff",
                    fontSize: "18px",
                    fontWeight: "600",
                    marginRight: "10px",
                  }}
                >
                  Join squad
                </div>
                <div style={{
                  paddingTop: "3px",
                }}>
                  <svg
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ flexShrink: "0", color: "#707579" }}
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
              </div>
            </div>
          </button>
          <div
            style={{
              margin: "0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "36px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className="_scoreIcon_55nwt_10"></div>
              <div
                style={{ color: "#fff", fontSize: "50px", fontWeight: "700" }}
              >
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
            }}
          >
            <button
              onClick={() => navigate("/league")}
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <div className="cupIcon_j4kjd_base cupIcon_j4kjd_2"></div>
              <div
                style={{
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: "600",
                  marginRight: "12px",
                }}
              >
                Silver
              </div>
              <div style={{
                paddingTop: "5px",
              }}>
                <svg
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ flexShrink: "0", color: "#707579" }}
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
          <div
            style={{
              flexGrow: "1",
              position: "fixed",
              bottom: "58px",
              left: "14px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className="_lighting"></div>
              <div
                style={{
                  color: "#fff",
                  fontSize: "24px",
                  fontWeight: "600",
                  paddingRight: "2px",
                }}
              >
                0
              </div>
              <div
                style={{
                  color: "rgb(112, 117, 121)",
                  fontSize: "12px",
                  fontWeight: "600",
                  paddingTop: "12px",
                }}
              >
                /10,000
              </div>
            </div>
          </div>
          <div
            style={{
              // height: "16px",
              // borderRadius: "20px",
              // overflow: "hidden",
              // backgroundColor: "#fff3",
              flexGrow: "1",
              position: "fixed",
              bottom: "56px",
              right: "14px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <button
                onClick={() => {
                  navigate("/fren");
                }}
                style={{
                  padding: "12px 14px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderRadius: "12px",
                  background: "rgba(255, 255, 255, 0.12)",
                  backdropFilter: "blur(14px)",
                  cursor: "pointer",
                  marginRight: "5px",
                  // margin: "14px",
                }}
              >
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#fff",
                  }}
                >
                  frens
                </div>
              </button>
              <button
                onClick={() => {
                  navigate("/boost");
                }}
                style={{
                  padding: "12px 14px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(101deg, #ffa800 25.94%, #f47e3c 94.32%)",
                  boxShadow: "0 2px 28px #00001c0f, 0 0 1px #00001c1f",
                  backdropFilter: "blur(14px)",
                  cursor: "pointer",
                  // margin: "14px",
                }}
              >
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#fff",
                  }}
                >
                  Boost!
                </div>
              </button>
            </div>
          </div>
          <div
            style={{
              height: "16px",
              borderRadius: "20px",
              overflow: "hidden",
              backgroundColor: "#fff3",
              flexGrow: "1",
              position: "fixed",
              bottom: "20px",
              left: "14px",
              right: "14px",
            }}
          >
            <div
              style={{
                height: "16px",
                borderRadius: "20px",
                width: "0px",
                transition: "width 0.45s ease 0.2s, opacity 0.45s ease 0.2s",
                opacity: "0",
                willChange: "opacity, width",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>

    //
  );
}

// export default function Main() {
//   return (
//     <div className="container">
//       <Field />
//     </div>
//   );
// }

// <main>
//   <div className="container">
//     <ProgressBar max={10000}/>
//   </div>
// </main>
