// images are store in public folder
// eg.
// public/img.jpg

// or
// create new folder in it and store in it
// eg.
// public/assets/img.jpg

// image path can acess directly using
// eg.
// <img src="img.jpg" alt="" />
// or inside created folder in public
// eg.
// <img src="./assets/img.jpg" alt="" />

import React from "react";
import ReactDOM from "react";
ReactDOM.render(
  <>
    <h1>Image</h1>
    <img src="logo192.png" className="w-100" alt="" />
    <img src="./asstes/logo192.png" className="w-100" alt="" />
  </>,
  document.getElementById("root")
);
