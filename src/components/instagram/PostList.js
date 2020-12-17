import React, { useState } from "react";
import PostCard from "./PostCard.js";
import styled from "styled-components";
import axios from "axios";
import useAsync from "../UseAsync.js";
import { useAppContext } from "../../store.js";

const Story = styled.div`
  border: 1px solid #bdbdbd;
  width: 63%;
  height: 117px;
  background: white;
`;

function PostList() {
  const {
    store: { jwtToken },
    dispatch,
  } = useAppContext();
  const headers = { Authorization: `JWT ${jwtToken}` };
  async function getPost() {
    const response = await axios({
      url: "http://192.168.0.8:8080/api/post/",
      method: "get",
      headers,
    });

    return response.data;
  }

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
