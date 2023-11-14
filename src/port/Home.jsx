import React from "react";
import "./Home.css";
function Home() {
  return (
    <>
      <div className="container-fluid bghome">
        <div className="row ">
          <div className="col-md-6 col-12">
            <div className="infodet">
              <div>
                <img src="port2/hi.svg" className="hiimg" alt="" />
                <h1 className="text-light text-center h1text">
                  I am Jayad Pathan <br />A Developer !
                </h1>
                <p className="mt-3 text-light p-5">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
              <div className="mb-3">
                <button className="btn mr-3 p-2 btn-primary">Hire Me</button>
                <button className="btn p-2 btn-light">
                  View Profile <i className="far fa-arrow-right"></i>
                </button>
              </div>
              <div>
                <div className="mb-4 mt-3">
                  <button className="btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#2a9d8f"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-github ml-3 mr-1 h4"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                    Github
                  </button>
                  <button className="btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0277b5"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-linkedin ml-3 mr-1 h4"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    Linkedin
                  </button>
                  <button className="btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#b5179e"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-instagram ml-3 mr-1 h4"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                    Instagram
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <img src="port2/home.png" className="w-100" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
