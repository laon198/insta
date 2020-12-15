import React from "react";
import AppLayout from "../components/AppLayout";
import HomeLayout from "../components/HomeLayout";
import SideBar from "../components/instagram/SideBar";
import PostList from "../components/instagram/PostList";
import "antd/dist/antd.css";
import Profile from "./instagram/Profile";
import { Route } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <HomeLayout SideBar={<SideBar />}>
        <PostList />
      </HomeLayout>
    </div>
  );
}
