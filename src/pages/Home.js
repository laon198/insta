import React from "react";
import AppLayout from "../components/AppLayout";
import HomeLayout from "../components/HomeLayout";
import SideBar from '../components/instagram/SideBar';
import PostList from '../components/instagram/PostList';

export default function Home(){
    return(
        <div>
            <AppLayout>
                <HomeLayout SideBar={<SideBar/>}>    
                    <PostList/>
                    
                </HomeLayout>
            </AppLayout>
        </div>
    );
}