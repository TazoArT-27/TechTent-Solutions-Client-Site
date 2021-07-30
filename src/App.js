import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home/Home/Home";
import ServicesPage from "./components/ServicesPage/ServicesPage/ServicesPage";
import ContactPage from './components/ContactPage/ContactPage/ContactPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/services">
          <ServicesPage></ServicesPage>
        </Route>
        <Route path="/contact">
          <ContactPage></ContactPage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
