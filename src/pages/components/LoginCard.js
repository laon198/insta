import React, { useState } from "react";
import Style from "../css/LoginCard.module.css";
import Input from "../components/Input";
import And from "../components/And";
import WhiteBox from "../components/WhiteBox";
import Instagram from "../components/Instagram";
import AppDownBox from "./AppDownBox";
import SubmitButton from "./SubmitButton";
import Axios from "axios";
import { setToken, useAppContext } from "../../store";
import { useHistory, useLocation } from "react-router-dom";

function LoginCard() {
  const { dispatch } = useAppContext();
  const location = useLocation();
  const history = useHistory();
  const [inputs, setInputs] = useState({ email: "", password: "" });
  // const [jwtToken, setjwtToken] = useLocalStorage("jwtToken", "");
  const { from: loginRedirectUrl } = location.state || {
    from: { pathanme: "/" },
  };
  // console.log("loaded jwtToken : ", jwtToken);

  const onSubmit = (e) => {
    async function fn() {
      e.preventDefault();
      const { email, password } = inputs;
      const data = { email, password };
      try {
        const response = await Axios.post(
          "http://192.168.0.8:8080/accounts/login/",
          data
        );
        const {
          data: { token: jwtToken },
        } = response;
        dispatch(setToken(jwtToken));
        // setjwtToken(jwtToken);
        history.push(loginRedirectUrl);
      } catch (error) {
        console.error(error);
      }
    }
    fn();
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div>
      <WhiteBox className={Style.loginBox}>
        <Instagram />
        <form onSubmit={onSubmit}>
          <div className={Style.inputBox}>
            <Input
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              className={Style.input1}
              name="email"
              onChange={onChange}
            ></Input>
            <Input
              type="password"
              placeholder="비밀번호"
              className={Style.input2}
              name="password"
              onChange={onChange}
            ></Input>
            <SubmitButton text={"로그인"}></SubmitButton>
            <And className={Style.and}></And>
          </div>
          <button className={Style.facebook}>
            <span></span>
            <span>Facebook으로 로그인</span>
          </button>
          <a href="http://www.naver.com" className={Style.pwReset}>
            비밀번호를 잊으셨나요?
          </a>
        </form>
      </WhiteBox>
      <WhiteBox className={Style.joinBox}>
        <div>
          <p className={Style.joinAsk}>
            계정이 없으신가요?
            <a href="http://www.naver.com" className={Style.joinLink}>
              가입하기
            </a>
          </p>
        </div>
      </WhiteBox>
      <AppDownBox></AppDownBox>
    </div>
  );
}
export default LoginCard;
