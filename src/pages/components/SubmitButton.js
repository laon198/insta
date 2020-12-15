import React from "react";
import Style from "../css/SubmitButton.module.css";
import classNames from "classnames";

function SubmitButton({ text, className }) {
  return (
    <div>
      <button type="submit" className={classNames(Style.btn, className)}>
        {text}
      </button>
    </div>
  );
}

export default SubmitButton;
