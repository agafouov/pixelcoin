import "./style.scss";
import Lottie from "lottie-react";
import Disco from "../../assets/animation/Disco.json";

export default function Squad() {
  return (
    <div className="page">
      {/* <div className="_background_lnckw_27"></div> */}
      <div className="container">
        <div className="page__content">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
            <div style={{ width: "115px", height: "115px" }}>
              <Lottie animationData={Disco} />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              marginTop: "25px",
              fontSize: "32px",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            <div style={{}}>Join Squad!</div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#ffffffbf",
              marginTop: "10px",
              fontSize: "16px",
              fontWeight: "400",
              textAlign: "center",
            }}
          >
            These squads receruiting now.
            <br />
            Do you wanna join?
          </div>
          <button
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              padding: "14px 12px",
              borderRadius: "14px",
              background:
                "linear-gradient(101deg, #ffa800 25.94%, #f47e3c 94.32%)",
              boxShadow: "0 2px 28px #00001c0f, 0 0 1px #00001c1f",
              marginTop: "24px",
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
                    fontSize: "17px",
                    fontWeight: "600",
                    marginRight: "10px",
                  }}
                >
                  Join another squad
                </div>
              </div>
            </div>
          </button>
          {/* <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // width: "100%",
                padding: "200px",
                borderRadius: "14px",
                background: "rgba(255, 255, 255, 0.12)",
                backdropFilter: "blur(14px)",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // marginTop: "30px",
                }}
              >
                <div style={{ width: "115px", height: "115px" }}>
                  <Lottie animationData={Disco} />
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
