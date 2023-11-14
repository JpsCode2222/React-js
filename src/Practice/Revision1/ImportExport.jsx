// if multiple function component import and export use -> comp1,{ comp2,comp3 }
import React from "react";
// First Component
function ImportExport() {
  return (
    <>
      <h1>First Component</h1>
    </>
  );
}

// Second Component
function SecondComponent() {
  return (
    <>
      <h1>Second component</h1>
    </>
  );
}

// Third Component
function ThirdComponent() {
  return (
    <>
      <h1>Third component</h1>
    </>
  );
}

export default ImportExport;
// bydefault only one comp can be export
export { SecondComponent, ThirdComponent };

// to use in another component like that
// import ImportExport , {SecondComponent,ThirdComponent} from './ImportExport.jsx'
