import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
//Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";

import NavBar from "./components/layout/NavBar";
import Landing from "./components/layout/Landing";
import SupportList from "./components/support/SupportList";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Blog from "./components/resources/Blog";
import BlogPost from "./components/resources/BlogPost";
import Alert from "./components/layout/Alert";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []); //runs once when mounted

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <NavBar />
          <Alert />
          <Route exact path='/' component={Landing} />
          <div className='ui-container'>
            <Switch>
              <Route exact path='/blog' component={Blog} />
              <Route path='/blog/:page' exact component={Blog} />
              <Route path='/blog/posts/:post' component={BlogPost} />
              <Route exact path='/support' component={SupportList} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
