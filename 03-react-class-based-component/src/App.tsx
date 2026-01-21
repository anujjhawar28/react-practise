import React from "react";
import HelloWorld from "./components/HelloWorld";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


interface AppState {
  count: number;
}
export default class App extends React.Component {
  state: AppState;
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0
    };
  }

  setCount = () => { 
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    const AppleComponent = () => {
      return <h2>Apple Component</h2>;
    }
    return (
      <>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={this.setCount}>
            count is {this.state.count}
            <AppleComponent />
          </button> 
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <HelloWorld />
      </>
    );
  }
}
