import Header from "../../components/Header";
import React from "react";
import styles from "./Profile.module.scss";
import profile from "../../assets/profile.jpg";
import { Route, Link } from "react-router-dom";
import { MdSettings } from "react-icons/md";

function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.header}>
        <div className={styles.profileimg}>
          <img src={profile} alt="프로필이미지" />
        </div>
        <div className={styles.infor}>
          <div className={styles.top}>
            <h2>hyeon2345</h2>
            <Link className={styles.edit} to="/accounts/edit">
              프로필 편집
            </Link>
            <div className={styles.settings}>
              <MdSettings />
            </div>
          </div>
          <ul className={styles.mid}>
            <li>게시물0</li>
            <li>팔로워13</li>
            <li>팔로우3</li>
          </ul>
          <div className={styles.bottom}>김현석</div>
        </div>
      </div>
      <div className={styles.contents}>
        <ul>
          <li>게시물</li>
          <li>IGTV</li>
          <li>저장됨</li>
          <li>태그됨</li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
