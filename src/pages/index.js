import React from "react";
import Home from "./Home";
import { Route } from "react-router-dom";
import AccountRoute from "./accounts/index.js";
import ProfilePage from "./instagram/ProfilePage";

//Page Route용
export default function Root() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/accounts" component={AccountRoute} />
    </div>
  );
}
