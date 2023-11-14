import React, { createContext } from "react";
import A from "./A.jsx";
// create context alway write above the function
var Fname = createContext();
var Lname = createContext();
function Abc(props) {
  return (
    <>
      <h1>Abc</h1>
      <Fname.Provider value="A2Z">
        <Lname.Provider value="Infotech">
          <A name="hello"></A>
        </Lname.Provider>
      </Fname.Provider>
    </>
  );
}
export default Abc;
export { Fname, Lname };
