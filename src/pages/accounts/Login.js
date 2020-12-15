import React, { Fragment } from "react";
import style from "../css/Login.module.css";
import Reset from "../css/reset.css";
import AccountLayout from "../components/AccountLayout";
import LoginCard from "../components/LoginCard";
import Iphone from "../components/Iphone";

export default function Login() {
  return (
    <Fragment>
      <Iphone />
      <LoginCard></LoginCard>
    </Fragment>
  );
}
