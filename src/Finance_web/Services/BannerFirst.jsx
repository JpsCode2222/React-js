import React from "react";
export default function BannerFirst(props) {
  const mystyle = {
    backgroundImage: `url("/finance/${props.bgimg}")`,
    height: "400px",
    width: "100%",
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
    objectFit: "cover",
  };
  const blackcoveronbg = {
    height: "100",
    width: "100",
    backgroundColor: " rgba(36, 36, 56, 0.637)",
    justifyContent: "center",
    flexDirection: "column",
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 p-0">
            <div className="w-100" style={mystyle}>
              <div
                className="w-100 h-100 text-white d-flex align-item-center text-center"
                style={blackcoveronbg}
              >
                <p className="h3">{props.head}</p>
                <p className="mt-4">Home / {props.subhead}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
