// state in class component
// StateInClass.jsx
import React from "react";
class StateInClass extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "A2Z",
      coutn: 0,
    };
  }
  update() {
    this.setState({
      name: "A2Z IT HUB",
      coutn: this.state.coutn + 1,
    });
  }
  render() {
    return (
      <>
        <h3>{this.state.name}</h3>
        <h3>{this.state.coutn}</h3>
        <button onClick={() => this.update()}>Update</button>
      </>
    );
  }
}
export default StateInClass;

// index.jsx
import React from "react";
import ReactDom from "react-dom";
import StateInClass from "./StateInClass.jsx";
ReactDom.render(
  <>
    <StateInClass></StateInClass>
  </>,
  document.getElementById("root")
);
// ---------------------------------------------------------------

// hooks in react 
// 1> useState

import React, { useState } from "react";
export default function StateInClass() {
  const [state, setState] = useState("A2Z");
  function update() {
    setState("A2Z it hub");
  }
  return (
    <>
      <h1>Welcome {state}</h1>
      <button onClick={update}>Update</button>
    </>
  );
}

// index.jsx
import React from 'react';
import ReactDom from 'react-dom';
import StateInClass from './StateInClass.jsx';
ReactDom.render(
  <>
  <StateInClass></StateInClass>
  </>,
  document.getElementById('root')
)

// show hide
import React from "react";
export default class StateInClass extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "A2Z",
      show: true,
    };
  }
  hide() {
    this.setState({
      show: !this.state.show,
    });
  }
  render() {
    return (
      <>
        {this.state.show ? (
          <div>
            <h1>Hello {this.state.name}</h1>
          </div>
        ) : null}
        <button onClick={() => this.hide()}>Show/Hide</button>
      </>
    );
  }
}
// =============================================================
// Multipage Website :
//  cmd
//  npm install react-router-dom


