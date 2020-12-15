import React, { useState } from "react";
import PostCard from "./PostCard.js";
import styled from "styled-components";
import axios from "axios";
import useAsync from "../UseAsync.js";

const Story = styled.div`
  border: 1px solid #bdbdbd;
  width: 63%;
  height: 117px;
  background: white;
`;

async function getPost() {
  const response = await axios.get("http://192.168.0.8:8080/api/post/");

  return response.data;
}

function PostList() {
  const [state, refetch] = useAsync(getPost, []);

  const { loading, data: postlist, error } = state;

  // if (loading) return <div>로딩중..</div>;
  // if (error) return <div>에러가 발생했습니다</div>;
  if (!postlist) return null;

  return (
    <div>
      <Story />
      {postlist &&
        postlist.map((post) => (
          <PostCard post={post} key={post.id} refetch={refetch} />
        ))}
    </div>
  );
}

export default PostList;
