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
