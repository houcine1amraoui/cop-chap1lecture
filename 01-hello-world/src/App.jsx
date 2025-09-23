import { Component } from "react";
import "./App.css";
// import Hello from "./components/Hello";

function Hello() {
  return <div>Hello World!</div>;
}

class Hello2 extends Component {
  render() {
    return <div>Hello World2</div>;
  }
}
function App() {
  return (
    <div>
      <Hello />
      <Hello2 />
    </div>
  );
}

export default App;
