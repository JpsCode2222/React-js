import React, { useState, useEffect } from "react";
export default function UseEffectModalDemo() {
  var [active, setActive] = useState(false);
  useEffect(() => {
    if (active) {
      setTimeout(() => {
        document.getElementById("close").click();
      }, 5000);
      setActive(false);
    }
  }, [active]);
  return (
    <>
      <div className="container pt-5">
        <div className="row mt-5 pt-5">
          <div className="col-12 text-primary text-center mb-5">
            <h2>
              <b>Gallary</b>
            </h2>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body p-0">
                <img src="./port2/ui.jpg" className="w-100" alt="" />
              </div>
              <div className="card-footer text-center">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  onClick={() => setActive(true)}
                >
                  view
                </button>

                <div
                  className="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content mt-5">
                      <div className="modal-header d-none">
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body p-0">
                        <img src="./port2/ui.jpg" className="w-100" alt="" />
                      </div>
                      <div className="modal-footer d-none">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                          id="close"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body p-0">
                <img src="./port2/graphics.jpg" className="w-100" alt="" />
              </div>
              <div className="card-footer text-center">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  onClick={() => setActive(true)}
                >
                  view
                </button>

                <div
                  className="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content mt-5">
                      <div className="modal-header d-none">
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body p-0">
                        <img
                          src="./port2/graphics.jpg"
                          className="w-100"
                          alt=""
                        />
                      </div>
                      <div className="modal-footer d-none">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                          id="close"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body p-0">
                <img src="./port2/ui.jpg" className="w-100" alt="" />
              </div>
              <div className="card-footer text-center">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  onClick={() => setActive(true)}
                >
                  view
                </button>

                <div
                  className="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content mt-5">
                      <div className="modal-header d-none">
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body p-0">
                        <img src="./port2/ui.jpg" className="w-100" alt="" />
                      </div>
                      <div className="modal-footer d-none">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                          id="close"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
