import Header from "../../components/Header";
import React from "react";
import styles from "./Profile.module.scss";
import profile from "../../assets/profile.jpg";
import { Route, Link } from "react-router-dom";
import { MdSettings } from "react-icons/md";
import {
  ContactsOutlined,
  ReadOutlined,
  TableOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { BsBookmark } from "react-icons/bs";

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
      {/* <!-- //header --> */}
      <div className={styles.posts}>
        <div className={styles.postsTitle}>
          <div className={styles.postMenu}>
            <Link to="/profile">
              <div className={styles.postMenuLink}>
                <TableOutlined /> <span>게시물</span>
              </div>
            </Link>
          </div>
          <div className={styles.postMenu}>
            <Link to="/profile/channel">
              <div className={styles.postMenuLink}>
                <VideoCameraOutlined /> <span>IGTV</span>
              </div>
            </Link>
          </div>

          <div className={styles.postMenu}>
            <Link to="/profile/saved">
              <div className={styles.postMenuLink}>
                <BsBookmark /> <span>저장됨</span>
              </div>
            </Link>
          </div>
          <div className={styles.postMenu}>
            <Link to="/profile/tagged">
              <div className={styles.postMenuLink}>
                <ContactsOutlined /> <span>태그됨</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
