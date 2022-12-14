
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, HashRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { ReservacionesProvider } from "context/ReservacionesContext";
import AdminLayout from "layouts/Admin.js";
import {Provider} from 'react-redux'
import {store} from './store'
import ProviderLogin from './components/Login/ProviderLogin';
import Login from './components/Login/Login';
import { AuthProvider } from 'context/UserContext';
import { PrivateRoute } from "utilitis/PrivateRoute";


ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <ReservacionesProvider>
        <AuthProvider>
          <Switch>
            <Route
              path="/login"
              render={(props) => <ProviderLogin {...props} />}
            />
            <PrivateRoute
              path="/admin"
              render={(props) => <AdminLayout {...props} />}
            />

            <Redirect from="/" to="/admin/reservar" />
          </Switch>
        </AuthProvider>
      </ReservacionesProvider>
    </HashRouter>
    ,
  </Provider>,
  document.getElementById("root")
);
