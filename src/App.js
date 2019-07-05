import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Board from "./bannuComponents/Board";
import Square from "./bannuComponents/Square";
import Game from "./bannuComponents/Game";
import GameStart from "./tiktoktoe/GameStart";
import styles from "./index.module.css";
import ErrorBoundry from "./ErrorBoundry";

function App() {
  return (
    //     <div>

    //      <Game/>
    // <br/>
    //      <hr/>
    // <br/>
    //      <GameStart/>

    //     </div>

    <Router>
      <a href="/bannuapp" className={styles.bannuapp}>
        Bannu Application
      </a>
      <a href="/ganiapp" className={styles.ganiapp}>
        Gani Application
      </a>

    <br/><br/>
      <div className={styles.router}>
        {/* <Route exact path="/" component={Home} /> */}
        <Route path="/bannuapp" component={BannuApp} />
        <Route path="/ganiapp" component={GaniApp} />
      </div>
    </Router>
  );
}
function BannuApp() {
  return (
  
<>
  <ErrorBoundry>
      <Game />
  </ErrorBoundry>
  <h2>Test Message</h2>
</>

  );
}

function GaniApp() {
  return <GameStart />;
}

export default App;
