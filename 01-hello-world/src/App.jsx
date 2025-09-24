import { Component } from "react";
import "./App.css";
// import Hello from "./components/Hello";

// function Welcome() {
//   return <h1>Hello World!</h1>;
// }

class Welcome extends Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}

function App() {
  return (
    <div>
      <Welcome />
      <Welcome />
    </div>
  );
}

export default App;
