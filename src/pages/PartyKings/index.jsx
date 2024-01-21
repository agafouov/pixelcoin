import "./style.scss";
import Lottie from "lottie-react";
import Influencer from "../../assets/animation/Influencer.json";

export default function PartyKings() {
  return (
    <div className="page">
      <div className="container">
        <div className="page__container">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
            <div style={{ width: "115px", height: "115px" }}>
              <Lottie animationData={Influencer} />
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
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            <div style={{}}>Party Kings</div>
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
            Invite more frens to get here
          </div>
          <div
            style={{
              padding: "15px 12px",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "14px",
              background:
                "linear-gradient(101deg, #ffa800 25.94%, #f47e3c 94.32%)",
              boxShadow: "0 2px 28px #00001c0f, 0 0 1px #00001c1f",
              cursor: "pointer",
              margin: "12px",
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
                  Invite frens
                </div>
              </div>
            </div>
          </div>
          {/* <div>
            <div
              style={{
                padding: "12px 12px",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: "14px",
                background: "rgba(255, 255, 255, 0.12)",
                backdropFilter: "blur(14px)",
                margin: "14px",
                marginTop: "26px",
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
                <div style={{ display: "flex", alignItems: "center" }}></div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
    //  <div className="_background_lnckw_27">

    //  </div>
  );
}
