import React from "react";
export default function Card(props) {
  return (
    <>
      <div className="col-4 mt-4">
        <div className="card border-0">
          <div className="card-body p-0 overflow-hidden ">
            <img
              src={`./finance/${props.img}`}
              className="h-100 w-100 imghoverani"
              alt=""
            />
          </div>
          <div className="card-footer border-0 bg-white p-0 mt-3">
            <span>
              <i className="far fa-calendar"></i> 10-Oct-23
            </span>
            <span>
              <i className="far fa-eye ml-5"></i>70 views
            </span>
            <p className="blogheading">{props.head}</p>
            <p className="bloglink">Read More</p>
          </div>
        </div>
      </div>
    </>
  );
}
