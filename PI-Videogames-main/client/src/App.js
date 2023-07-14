import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import "./App.css";
import Detail from "./views/Detail/detail";
import Form from "./views/Form/form";
import Home from "./views/Home/home";
import Landing from './views/Landing/landing'
import Favoritos from "./views/Favoritos/favoritos";

function App() {
  const location = useLocation();
  console.log(location)
  const isLanding = location.pathname === "/";

  return (
    <div>
      {isLanding ? (
        <Landing />
      ) : (
        <>
          <Switch>
            <Route path="/favoritos" component={Favoritos}/>
            <Route path="/home" component={Home} />
            <Route path="/form" component={Form} />
            <Route path="/home/:id" component={Detail} />
          </Switch>
        </>
      )}
    </div>
  );
}

export default App;