import React from "react";
import { Children } from "react";
import Style from "../css/WhiteBox.module.css";

function WhiteBox({ children, className }) {
  return (
    <div id={Style.whiteBox} className={className}>
      {children}
    </div>
  );
}

export default WhiteBox;
