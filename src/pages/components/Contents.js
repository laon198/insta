import React from "react";
import style from "../css/Contents.module.css";
import googleDown from "../../assets/accounts/googleDown.png";
import appleDown from "../../assets/accounts/appleDown.png";

function Contents() {
  return (
    <section className={style.Contents}>
      <div className={style.contBox}>
        <div className={style.leftCont}>사진들어갈자리</div>
        <div className={style.rightCont}>
          <div>
            <div></div>
            <div></div>
          </div>
          <div className={style.appDown}>
            <p className={style.appDownTitle}>앱을 다운로드하세요.</p>
            <div className={style.appDownBtn}>
              <img src={googleDown}></img>
              <img src={appleDown}></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contents;
