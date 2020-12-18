import React, { useState } from "react";
import styles from "./SideBar.module.scss";
import profile from "../../assets/profile.jpg";
import friend from "../../assets/friend.jpg";
import axios from "axios";
import { useAppContext } from "../../store";
import { useEffect } from "react";

function SideBar() {
  const {
    store: { jwtToken, username },
  } = useAppContext();
  const headers = { Authorization: `JWT ${jwtToken}` };
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    axios({
      url: `http://192.168.0.8:8080/accounts/${username}/`,
      method: "GET",
      headers,
    })
      .then((response) => {
        setUserInfo({
          ...response.data,
        });
        console.log(userInfo);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.sidebar}>
      <div className={styles.myprofile}>
        <div>
          <a href="#" className={styles.myprofimg}>
            <img
              src={userInfo.avatar ? userInfo.avatar : profile}
              alt="나의프로필"
            />
          </a>
        </div>
        <div className={styles.myprofname}>
          <a className={styles.myprofname_a} href="#">
            {userInfo.username}
          </a>
          <p className={styles.myname}>김현석</p>
        </div>
        <div className={styles.transfer}>
          <a href="#">전환</a>
        </div>
      </div>
      <div className={styles.recommend}>
        <div className={styles.recom_top}>
          <p>회원님을 위한 추천</p>
          <a href="#">모두보기</a>
        </div>
        <div className={styles.recom_friend}>
          <ul>
            <li>
              <a className={styles.friendimg} href="#">
                <img src={friend} alt="친구1" />
              </a>
              <div className={styles.namebox}>
                <a className={styles.friendname} href="#">
                  ji_h00n2
                </a>
                <p className={styles.followyou}>Follows you</p>
              </div>
              <a className={styles.follow} href="#">
                팔로우
              </a>
            </li>
            <li>
              <a className={styles.friendimg} href="#">
                <img src={friend} alt="친구1" />
              </a>
              <div className={styles.namebox}>
                <a className={styles.friendname} href="#">
                  ji_h00n2
                </a>
                <p className={styles.followyou}>Follows you</p>
              </div>
              <a className={styles.follow} href="#">
                팔로우
              </a>
            </li>
            <li>
              <a className={styles.friendimg} href="#">
                <img src={friend} alt="친구1" />
              </a>
              <div className={styles.namebox}>
                <a className={styles.friendname} href="#">
                  ji_h00n2
                </a>
                <p className={styles.followyou}>Follows you</p>
              </div>
              <a className={styles.follow} href="#">
                팔로우
              </a>
            </li>
            <li>
              <a className={styles.friendimg} href="#">
                <img src={friend} alt="친구1" />
              </a>
              <div className={styles.namebox}>
                <a className={styles.friendname} href="#">
                  ji_h00n2
                </a>
                <p className={styles.followyou}>Follows you</p>
              </div>
              <a className={styles.follow} href="#">
                팔로우
              </a>
            </li>
            <li>
              <a className={styles.friendimg} href="#">
                <img src={friend} alt="친구1" />
              </a>
              <div className={styles.namebox}>
                <a className={styles.friendname} href="#">
                  ji_h00n2
                </a>
                <p className={styles.followyou}>Follows you</p>
              </div>
              <a className={styles.follow} href="#">
                팔로우
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
