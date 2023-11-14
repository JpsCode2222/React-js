import React from "react";
export default function HomeSix() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 newletterimgbg">
            <div className="blacknewletterimgbg text-center text-white align-item-center">
              <p className="newletterheading">
                Let’s find out how to work together
              </p>
              <p className="text-bold mt-3">
                Ready to start your project? The contact information <br />{" "}
                collected through this form will only be used to <br /> send a
                response to your inquiry.
              </p>

              <div class="input-group mb-3 bgngorupdiv mt-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder=" Enter Email Here..."
                />
                <div class="input-group-append">
                  <button class="btn btn-primary" type="button">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
