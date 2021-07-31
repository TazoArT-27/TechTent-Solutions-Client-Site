import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home/Home/Home";
import ServicesPage from "./components/ServicesPage/ServicesPage/ServicesPage";
import ContactPage from './components/ContactPage/ContactPage/ContactPage';
import Admin from "./components/Admin/Admin/Admin";
import OrdersPage from "./components/Admin/OrdersPage/OrdersPage/OrdersPage";
import CustomersPage from "./components/Admin/CustomersPage/CustomersPage";
import AddAdmin from "./components/Admin/AddAdmin/AddAdmin";
import AddService from "./components/Admin/AddService/AddService";
import OrderForm from "./components/Users/OrderForm/OrderForm";
import Review from "./components/Users/Review/Review";
import OrderList from "./components/Users/OrderList/OrderList";

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
        <Route path="/admin">
          <Admin></Admin>
        </Route>
        <Route path="/orderPage">
          <OrdersPage></OrdersPage>
        </Route>
        <Route path="/customersPage">
          <CustomersPage></CustomersPage>
        </Route>
        <Route path="/addAdmin">
          <AddAdmin></AddAdmin>
        </Route>
        <Route path="/addService">
          <AddService></AddService>
        </Route>
        <Route path="/orderUser">
          <OrderForm></OrderForm>
        </Route>
        <Route path="/reviewUser">
          <Review></Review>
        </Route>
        <Route path="/orderListUser">
          <OrderList></OrderList>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
