import React from "react";
export default function Card(props) {
  return (
    <>
      <div className="col-md-4 mt-4">
        <div className="card border">
          <div className="card-body p-0 overflow-hidden ">
            <img
              src={`./finance/${props.img}`}
              className="h-100 w-100 imghoverani"
              alt=""
            />
          </div>
          <div className="card-footer border bg-white">
            <p className="blogheading h6 changecolor">{props.title}</p>
            <p className="text-secondary">{props.det}</p>
          </div>
        </div>
      </div>
    </>
  );
}
