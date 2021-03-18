import React from "react";
import "./assets/css/base/base.css";
import Sobre from "./paginas/Sobre";
import Home from "./paginas/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pagina404 from "./paginas/Pagina404";
import Cabecalho from "./components/Cabecalho";

function App() {
  return (
    <Router>
      <Cabecalho />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Sobre">
          <Sobre />
        </Route>
        <Route>
          <Pagina404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
