import React from "react";
// get props
function Card(props) {
  return (
    <>
      <div className="col-3">
        <div className="card">
          <div className="card-body">
            {/* use props */}
            <img src={props.img} className="w-100" alt="" />
          </div>
          <div className="card-footer">
            {/* use props */}
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
