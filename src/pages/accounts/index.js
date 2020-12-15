import React from "react";
import Login from "./Login";
import { Route } from "react-router-dom";
<<<<<<< HEAD
import Signup from "./Signup";
import AccountLayout from "../components/AccountLayout";

export default function AccoutRoute() {
  return (
    <AccountLayout>
      <Route exact path="/accounts/login" component={Login} />
      <Route exact path="/accounts/signup" component={Signup} />
    </AccountLayout>
=======

export default function AccountRoute() {
  return (
    <div>
      <Route exact path="/accounts/login" component={Login} />
    </div>
>>>>>>> feature/layout
  );
}
