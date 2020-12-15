import React from "react";
import Login from "./Login";
import { Route } from "react-router-dom";
import Signup from "./Signup";
import AccountLayout from "../components/AccountLayout";

export default function AccoutRoute() {
  return (
    <AccountLayout>
      <Route exact path="/accounts/login" component={Login} />
      <Route exact path="/accounts/signup" component={Signup} />
    </AccountLayout>
  );
}
