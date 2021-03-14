import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieDetails from "./pages/MovieDetails";
import Popular from "./pages/Popular";
import Search from "./pages/Search";
import Banner from "./components/Banner";
import Top from "./pages/Top";
import Upcoming from "./pages/Upcoming";

import "./styles/index.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Banner />
      <Switch>
        <Route path="/" exact={true}>
          <Redirect from="/" to="/popular" />
        </Route>
        <Route path="/popular" exact={true}>
          <Popular />
        </Route>
        <Route path="/top-rated" exact={true}>
          <Top />
        </Route>
        <Route path="/upcoming" exact={true}>
          <Upcoming />
        </Route>
        <Route
          path="/search/:search"
          render={(props) => <Search {...props} />}
        />
      </Switch>
      <Route
        path="/movie/:id"
        render={(props) => <MovieDetails {...props} />}
      />
      <Footer />
    </Router>
  );
};

export default App;
