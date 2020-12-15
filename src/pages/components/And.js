import React from "react";
import Style from "../css/And.module.css";
import classnames from "classnames";
function And() {
  return (
    <div className={Style.andBox}>
      <div className={Style.before}></div>
      <div className={Style.and}>또는</div>
      <div className={Style.after}></div>
    </div>
  );
}

export default And;
