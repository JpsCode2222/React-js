import React from "react";
export default function Skillset() {
  return (
    <>
      <h5 className="text-bold text-secondary mt-4">What I know</h5>
      <div className="col-3">
        <div className="card bg-dark">
          <div className="card-body bg-transparent">
            <h6 className="text-bold text-secondary">Frontend</h6>
            <button className="btn btn-transparent rounded bg-dark border mr-3 mt-3">
              html
            </button>
            <button className="btn btn-transparent rounded bg-dark border mr-3 mt-3">
              css
            </button>
            <button className="btn btn-transparent rounded bg-dark border mr-3 mt-3">
              javascript
            </button>
            <button className="btn btn-transparent rounded bg-dark border mr-3 mt-3">
              bootstrap
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
