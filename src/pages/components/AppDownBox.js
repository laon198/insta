import React from "react";
import Apple from "../../assets/accounts/appleDown.png";
import Google from "../../assets/accounts/googleDown.png";
import Style from "../css/AppDownBox.module.css";

function AppDownBox(props) {
  return (
    <div id={Style.appDownBox}>
      <p className={Style.ment}>앱을 다운로드 하세요.</p>
      <div className={Style.linkBox}>
        <a
          href="https://apps.apple.com/app/instagram/id389801252?vt=lo"
          className={Style.appleLink}
        >
          <img src={Apple} alt="apple down" className={Style.apple} />
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.instagram.android">
          <img src={Google} alt="google down" className={Style.google} />
        </a>
      </div>
    </div>
  );
}
export default AppDownBox;
