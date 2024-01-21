import "./style.scss";
import { BrowserRouter as Router, Route, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import Crystal from "../../assets/animation/Crystal.json";

export default function About() {
  const navigate = useNavigate();
  return (
    <div className="page">
      <div className="container">
        <div className="page__content">
          <div
            style={{
              display: "flex",
              gap: "4px",
              paddingBlock: "3px",
              paddingInline: "18px",
            }}
          >
            <a
              href="https://t.me/thepixelcoin"
              draggable="false"
              style={{
                position: "relative",
                width: "100%",
                borderRadius: "12px",
                height: "50px",
                padding: "8px 12px",
                background: "rgba(255, 255, 255, 0.12)",
                alignItems: "center",
                boxSizing: "border-box",
                cursor: "pointer",
                display: "inline-flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    marginRight: "6px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      color: "#fff",
                    }}
                  >
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.0509 10.9007C9.15013 8.64981 12.5448 7.15417 14.2494 6.42856C19.1009 4.37021 20.1207 4.01481 20.7764 4C20.9221 4 21.2426 4.02962 21.4611 4.20732C21.6359 4.3554 21.6797 4.54791 21.7088 4.69599C21.7379 4.84407 21.7671 5.15505 21.7379 5.39198C21.4757 8.20556 20.3393 15.0322 19.7565 18.1715C19.5088 19.5043 19.0281 19.9485 18.5618 19.993C17.542 20.0818 16.7698 19.3118 15.7937 18.6602C14.2494 17.6384 13.3898 17.0017 11.8891 15.9947C10.1554 14.8397 11.2772 14.2029 12.2679 13.1663C12.5302 12.8998 17.0029 8.75347 17.0904 8.38326C17.1049 8.33883 17.1049 8.16113 17.0029 8.07228C16.901 7.98343 16.7553 8.01305 16.6387 8.04267C16.4784 8.07228 14.0308 9.73081 9.26668 13.0034C8.56736 13.4921 7.94088 13.7291 7.37269 13.7142C6.74621 13.6994 5.55153 13.3588 4.64824 13.0627C3.55555 12.7073 2.6814 12.5148 2.75425 11.8928C2.79795 11.567 3.23503 11.2413 4.0509 10.9007Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div
                  style={{
                    padding: "2px 0",
                    fontWeight: "600",
                    fontSize: "18px",
                    lineHeight: "16px",
                    color: "#fff",
                  }}
                >
                  Join
                </div>
              </div>
            </a>
            <a
              href="https://twitter.com/thepixelcoin"
              draggable="false"
              style={{
                position: "relative",
                width: "100%",
                borderRadius: "12px",
                height: "50px",
                padding: "8px 12px",
                background: "rgba(255, 255, 255, 0.12)",
                alignItems: "center",
                boxSizing: "border-box",
                cursor: "pointer",
                display: "inline-flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    marginRight: "8px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      marginTop: "2px",
                      color: "#fff",
                    }}
                  >
                    <div className="_xIcon_55vwt_10"></div>
                  </div>
                </div>
                <div
                  style={{
                    padding: "2px 0",
                    fontWeight: "600",
                    fontSize: "18px",
                    lineHeight: "16px",
                    color: "#fff",
                  }}
                >
                  Follow
                </div>
              </div>
            </a>
          </div>
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
                  fontSize: "32px",
                  fontWeight: "700",
                  marginTop: "42px",
                }}
              >
                Pixelcoin
              </div>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                paddingTop: "43px",
                paddingLeft: "18px",
              }}
            >
              <div style={{
                width: "48px",
                height: "48px",
              }}>
                <Lottie animationData={Crystal} />
              </div>

              {/* <div className="background_55vwt_10 coinIcon_55vwt_10"></div> */}
            </div>

            <div
              style={{
                display: "flex",
                paddingTop: "44px",
                paddingLeft: "18px",
              }}
            >
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#fff",
                }}
              >
                Tap-to-earn Pixelcoin
                <br />
                <div
                  style={{
                    paddingTop: "6px",
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#fff",
                  }}
                >
                  Yes, that's easy
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                paddingTop: "40px",
                paddingLeft: "18px",
              }}
            >
              <div className="background_55vwt_10 lightingIcon_55vwt_10"></div>
            </div>

            <div
              style={{
                display: "flex",
                paddingTop: "39px",
                paddingLeft: "18px",
              }}
            >
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#fff",
                }}
              >
                Upgrade your Boosts
                <br />
                <div
                  style={{
                    paddingTop: "6px",
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#fff",
                  }}
                >
                  And earn Pixelcoin for tasks
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                paddingTop: "40px",
                paddingLeft: "18px",
              }}
            >
              <div className="background_55vwt_10 diamondCupIcon_55vwt_10"></div>
            </div>

            <div
              style={{
                display: "flex",
                paddingTop: "39px",
                paddingLeft: "18px",
              }}
            >
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#fff",
                }}
              >
                Climb to the top
                <br />
                <div
                  style={{
                    paddingTop: "6px",
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#fff",
                  }}
                >
                  Get to the Diamond league
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                paddingTop: "40px",
                paddingLeft: "18px",
              }}
            >
              <div className="background_55vwt_10 handshakeIcon_55vwt_10"></div>
            </div>

            <div
              style={{
                display: "flex",
                paddingTop: "39px",
                paddingLeft: "18px",
              }}
            >
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#fff",
                }}
              >
                Join Squad!
                <br />
                <div
                  style={{
                    paddingTop: "6px",
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#fff",
                  }}
                >
                  More fun together
                </div>
              </div>
            </div>
          </div>
          <a
            href="https://t.me/pixelcoinbot?start=community"
            draggable="false"
            target="_blank"
            style={{
              margin: "0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "fixed",
              bottom: "90px",
              left: "14px",
              right: "14px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  color: "var(--palette-brand-light)",
                  fontSize: "16px",
                  fontWeight: "350",
                }}
              >
                Full guide
              </div>
            </div>
          </a>
          <div
            onClick={() => {
              navigate("/");
            }}
            style={{
              padding: "14px 12px",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "14px",
              background:
                "linear-gradient(101deg, #ffa800 25.94%, #f47e3c 94.32%)",
              boxShadow: "0 2px 28px #00001c0f, 0 0 1px #00001c1f",
              flexGrow: "1",
              position: "fixed",
              bottom: "16px",
              left: "14px",
              right: "14px",
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    color: "#fff",
                    fontSize: "17px",
                    fontWeight: "600",
                    marginRight: "10px",
                  }}
                >
                  Play
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
