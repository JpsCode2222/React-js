import React from "react";
function Contact() {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-5 mb-5">
          <div className="col-md-6">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d150864.45321140584!2d74.65149933897484!3d19.10254311714076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcb05d46788921%3A0x6677e92c1a5181b6!2sAhmednagar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699189885070!5m2!1sen!2sin"
                width="100%"
                height="470"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                title="Location"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-12">
                <h3 className="text-center text-primary">Contact Us</h3>
              </div>
              <div className="col-6">
                <input
                  type="text"
                  className="form-control mt-3"
                  placeholder="Enter Name"
                />
              </div>
              <div className="col-6">
                <input
                  type="text"
                  className="form-control mt-3"
                  placeholder="Enter Email"
                />
              </div>
              <div className="col-12">
                <input
                  type="text"
                  className="form-control mt-3"
                  placeholder="Enter Subject"
                />
              </div>
              <div className="col-12">
                <textarea
                  placeholder="Enter Message"
                  rows="10"
                  className="form-control mt-3"
                ></textarea>
              </div>
              <div className="col-12 text-center">
                <button className="btn btn-primary mt-3">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
