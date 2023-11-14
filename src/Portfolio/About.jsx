import React from "react";
import "./About.css";
import Projects from "./Projects.jsx";
import Skillset from "./Skillset.jsx";
export default function About() {
  return (
    <>
      <div className="col-lg-10 col-12 pl-5 scrolldiv">
        <div className="bgcover d-flex rounded">
          <div className="bgabout">
            <div className="imagesec d-flex">
              <div className="imgbg">
                <img
                  src="./Portfolio/jppic.png"
                  className="photo"
                  alt="profile"
                />
              </div>
              <div className="ml-4 mt-3 text-white">
                <h4>
                  <b>Jayad Pathan</b>
                </h4>
                <span className="text-normal">@Code with jp</span>
              </div>
            </div>
            <div className="followmesec">
              <button className="btn btn-secondary btn-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>{" "}
                Follow me on instagram
              </button>
            </div>
          </div>
        </div>
        <div className="scrollingbar">
          <div className="row">
            <div className="col-12 pl-5 pt-3">
              <Projects></Projects>
              <Skillset></Skillset>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
