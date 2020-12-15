import React from "react";
import { Route, Link } from "react-router-dom";
import instaicon from "../assets/instaicon.png";
import styles from "./Header.module.scss";
import { Menu, Dropdown, Button } from "antd";
import {
  TagsOutlined,
  UserOutlined,
  SettingOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import {
  FaHome,
  FaRegPaperPlane,
  FaRegCompass,
  FaRegHeart,
} from "react-icons/fa";
import profile from ".././assets/profile.jpg";

function Header() {
  const menu = (
    <Menu>
      <Menu.Item className={styles.menu_items}>
        <Link to="/profile">
          <UserOutlined style={{ fontSize: "16px" }} />
          프로필
        </Link>
      </Menu.Item>
      <Menu.Item className={styles.menu_items}>
        <Link to="/saved">
          <TagsOutlined style={{ fontSize: "16px" }} />
          저장됨
        </Link>
      </Menu.Item>
      <Menu.Item className={styles.menu_items}>
        <Link to="/accounts/edit">
          <SettingOutlined style={{ fontSize: "16px" }} />
          설정
        </Link>
      </Menu.Item>
      <Menu.Item className={styles.menu_items}>
        <Link>
          <UserSwitchOutlined style={{ fontSize: "16px" }} />
          계정전환
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item className={styles.menu_items}>
        <Link to="/accounts/logout">로그아웃</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className={styles.header}>
      <h1 className={styles.title}>
        <Link to="/">
          <img src={instaicon} alt="인스타아이콘" />
        </Link>
      </h1>
      <div className={styles.search}>
        <input type="text" placeholder="검색" size="medium" />
      </div>
      <div className={styles.nav}>
        <div className={styles.homeicon}>
          <Link to="/">
            <FaHome className={styles.icon} />
          </Link>

          <Link to="/">
            <FaRegPaperPlane className={styles.icon} />
          </Link>

          <Link to="/">
            <FaRegCompass className={styles.icon} />
          </Link>

          <Link to="/">
            <FaRegHeart className={styles.icon} />
          </Link>

          <Dropdown overlay={menu} placement="bottomRight" trigger={["click"]}>
            <img className={styles.profile} src={profile} alt="profile" />
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default Header;
