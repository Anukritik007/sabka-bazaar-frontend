import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./containers/Home/Home";
import Footer from "./components/Footer/Footer";
import Products from "./containers/Products/Products";
import Register from "./containers/Auth/Register";
import SignIn from "./containers/Auth/SignIn";
import Cart from "./containers/Cart/Cart";
import AuthContext from "./AuthContext";

const App = () => {
  const [userAuthentication, setUserAuthentication] = useState(
    sessionStorage.getItem("status")
  );
  const contextVal = {
    userAuthentication,
    toggleUserAuthentication: () => {
      setUserAuthentication(
        userAuthentication === "logged-in" ? "" : "logged-in"
      );
    },
  };

  return (
    <AuthContext.Provider value={contextVal}>
      <BrowserRouter>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route path="/login" component={SignIn} />
            <Route path="/sign-up" component={Register} />
            <Route path="/home" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
