import React from "react";
class StateInClassComp extends React.Component {
  // use Constructor method
  constructor() {
    super();
    this.state = { name: "JAYAD PATHAN" };
  }
  change() {
    this.setState({
      name: "Jayad Pathan",
    });
  }
  render() {
    return (
      <>
        {/* Use State data */}
        <h1>Welcome {this.state.name}</h1>
        <button onClick={() => this.change()}>Change</button>
      </>
    );
  }
}
export default StateInClassComp;
