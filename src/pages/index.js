import React from "react";
import Home from "./Home";
import { Route } from "react-router-dom";
import AccountRoute from "./accounts/index.js";
import Profile from "./instagram/Profile";
import AppLayout from "../components/AppLayout";

//Page Route용
export default function Root() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/accounts" component={AccountRoute} />
    </div>
  );
}
