import React, { useState } from "react";
import PostCard from "./PostCard.js";
import styled from "styled-components";

import { useAppContext } from "../../store.js";
import useAxios from "axios-hooks";

const Story = styled.div`
  border: 1px solid #bdbdbd;
  width: 96%;
  height: 117px;
  background: white;
  margin-top: 33px;
`;

function PostList() {
  const {
    store: { jwtToken, isAuthenticated },
  } = useAppContext();

  const headers = { Authorization: `JWT ${jwtToken}` };

  const [{ loading, data: postlist, error }, refetch] = useAxios({
    url: "http://192.168.0.8:8080/api/post/",
    method: "get",
    headers,
  });

  // if (loading) return <div>로딩중..</div>;
  // if (error) return <div>에러가 발생했습니다</div>;
  // if (!postlist) return null;

  return (
    <div>
      <Story />
      {postlist &&
        postlist.map((post) => (
          <PostCard
            post={post}
            key={post.id}
            refetch={refetch}
            headers={headers}
          />
        ))}
    </div>
  );
}

export default PostList;
