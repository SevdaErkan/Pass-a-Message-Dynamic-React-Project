import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      messages: "",
      alert: ""
    };
  }

  onChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  onClick = (e) => {
    const { inputValue } = this.state;
    const newMsg = inputValue;
    if (inputValue !== "") {
      this.setState({
        messages: newMsg,
        inputValue: ""
      });
    } else {
      this.alertFunction();
    }
  };
  alertFunction = () => {
    this.setState({ alert: "PLEASE ENTER A VALUE" });
    setTimeout(this.deleteAlert, 3000);
  };
  deleteAlert = () => {
    this.setState({ alert: null });
  };

  render() {
    const { inputValue, messages, alert } = this.state;
    console.log("input", inputValue);
    const mesg = messages !== "" ? <div className="msg">{messages}</div> : null;

    return (
      <div className="App">
        <h4 style={{ font: "20px" }}>A Message You Would Like To Pass</h4>
        <input value={inputValue} type="text" onChange={this.onChange} />
        <div className="btn">
          <button onClick={this.onClick}> Submit</button>
        </div>
        <div className="alert">{alert}</div>
        <h4> Last Message Delivered</h4>
        {mesg}
      </div>
    );
  }
}
export default App;
