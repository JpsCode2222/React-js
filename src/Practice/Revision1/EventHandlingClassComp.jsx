import React from "react";
class EventHandlingClassComp extends React.Component {
  // function keyword not use in class component
  alert() {
    alert();
  }
  render() {
    return (
      <>
        {/* using this and bind() */}
        <button onClick={this.alert.bind()}>Alert</button>
        {/* using arrow function */}
        <button onClick={() => alert()}>Alert</button>
      </>
    );
  }
}
export default EventHandlingClassComp;
