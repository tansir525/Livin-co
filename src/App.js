import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Heading from "./Pages/Home/Heading/Heading";

import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import AuthProvider from "./Contexts/AuthProvider/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Mension from "./Pages/Home/Catagory/Mension/Mension";
import Flat from "./Pages/Home/Catagory/Flat/Flat";
import Duplex from "./Pages/Home/Catagory/Duplex/Duplex";
import Sovo from "./Pages/Home/Catagory/Sovo/Sovo";
import Studio from "./Pages/Home/Catagory/Studio/Studio";
import Condo from "./Pages/Home/Catagory/Condo/Condo";
import Booking from "./Pages/Home/Booking/Booking";
import Dashboard from "./Dashboard/Dashboard/Dashboard";
import Explore from "./Pages/Home/Explore/Explore";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Heading></Heading>
        <Router>
          <Switch>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/mension">
              <Mension></Mension>
            </Route>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <Route path="/flat">
              <Flat></Flat>
            </Route>
            <Route path="/duplex">
              <Duplex></Duplex>
            </Route>
            <Route path="/sovo">
              <Sovo></Sovo>
            </Route>
            <Route path="/studio">
              <Studio></Studio>
            </Route>
            <Route path="/condo">
              <Condo></Condo>
            </Route>
            <Route path="/booking/:bookingId">
              <Booking></Booking>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/about">
              <About />
            </PrivateRoute>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
