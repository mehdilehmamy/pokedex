import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Pokemon from "./Pages/Pokemon";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";



function App() {
  return (
    <Router> 
      <div className="App">
        <Navbar/>

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/pokemon/:id">
            <Pokemon/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
