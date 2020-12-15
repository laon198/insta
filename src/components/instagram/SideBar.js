import React from "react";
import styles from "./SideBar.module.scss";
import profile from "../../assets/profile.jpg";
import friend from "../../assets/friend.jpg";

// async function getPost() {
//   const response = await axios.get(
//     `http://192.168.0.8:8080/accounts/${usersname}/`
//   );

//   return response.data;
// }

function SideBar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.myprofile}>
        <div>
          <a href="#" className={styles.myprofimg}>
            <img src={profile} alt="나의프로필" />
          </a>
        </div>
        <div className={styles.myprofname}>
          <a className={styles.myprofname_a} href="#">
            hyeon2345
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
