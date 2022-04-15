import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home/Home/Home";
import ServicesPage from "./components/ServicesPage/ServicesPage/ServicesPage";
import ContactPage from './components/ContactPage/ContactPage/ContactPage';
import OrderForm from "./components/Users/OrderForm/OrderForm";
import Review from "./components/Users/Review/Review";
import OrderList from "./components/Users/OrderList/OrderList";
import Login from "./components/Login/Login/Login";
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import SignUp from "./components/Login/SignUp/SignUp";
import NotFound from "./components/NotFound/NotFound";
// import AddAdmin from './components/Users/AddAdmin/AddAdmin';
import AddAdmin from './components/Admin/AddAdmin/AddAdmin';
import AddNewAdmin from './components/Users/AddNewAdmin/AddNewAdmin'
import AllOrders from './components/Users/AllOrders/AllOrders'

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
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
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/signUp">
          <SignUp></SignUp>
        </Route>

        <PrivateRoute path="/orderUser">
          <OrderForm></OrderForm>
        </PrivateRoute>
        <PrivateRoute path="/reviewUser">
          <Review></Review>
        </PrivateRoute>
        <PrivateRoute path="/orderListUser">
          <OrderList></OrderList>
        </PrivateRoute>
        <PrivateRoute path="/newAdmin">
          <AddNewAdmin></AddNewAdmin>
        </PrivateRoute>
        {/* <PrivateRoute path="/newAdmin">
          <AddNewAdmin></AddNewAdmin>
        </PrivateRoute> */}



        <PrivateRoute path="/allOrders">
          <AllOrders></AllOrders>
        </PrivateRoute>

        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
