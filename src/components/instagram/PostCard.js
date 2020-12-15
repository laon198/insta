import React, { useState } from "react";
import styles from "./PostCard.module.scss";
import { BsHeart, BsChat, BsBookmark } from "react-icons/bs";
import { MdShare, MdAccountCircle } from "react-icons/md";

function PostCard({ post, refetch, key }) {
  const { id, author, caption, photo, is_like, how_like, created_at } = post;
  const { username, avatar } = author;
  const [like, setLike] = useState({ is_like: is_like, how_like: how_like });

  const onToggle = () => setLike({ is_like: !is_like, how_like: how_like + 1 });

  return (
    <div className={styles.postcard}>
      <div className={styles.list}>
        <div className={styles.top}>
          <a className={styles.avatar} href="#">
            {!avatar && <MdAccountCircle />}
            {avatar && <img src={avatar} alt="profile" />}
          </a>
          <a className={styles.nickname} href="#">
            {username}
          </a>
          <a className={styles.more} href="#">
            ...
          </a>
        </div>
        {/* <!-- //top --> */}

        <div className={styles.img}>
          <img src={photo} alt="postlistimg" />
        </div>
        {/* <!-- //img --> */}

        <div className={styles.posticon}>
          <div className={styles.posticon_left}>
            <a href="#">
              <BsHeart />
            </a>
            <a href="#">
              <BsChat />
            </a>
            <a href="#">
              <MdShare />
            </a>
          </div>
          <div className={styles.posticon_right}>
            <a href="#">
              <BsBookmark />
            </a>
          </div>
        </div>
        {/* <!-- //posticon --> */}

        <div className={styles.comment}>
          <a className={styles.likenum} href="#">
            좋아요 192,731개
          </a>
          <div className={styles.mycaption}>
            <a className={styles.nickname} href="#">
              {username}
            </a>
            <p className={styles.caption}> {caption}</p>
          </div>
          <a className={styles.com_more} href="#">
            댓글 212개 모두 보기
          </a>
          <a className={styles.com_writer} href="#">
            iguegumwang
          </a>
          <p className={styles.ptag}>유트브 볼 때마다 감탄 ㅠ</p>
          <a className={styles.date} href="#">
            {created_at}
          </a>
        </div>
        <form className={styles.input}>
          <input
            className={styles.comment_input}
            type="text"
            placeholder="댓글 달기..."
          />
          <input className={styles.comment_submit} value="게시" type="submit" />
        </form>
      </div>
      {/* <!-- // list --> */}
    </div>
    // <!-- //postcard -->
  );
}

export default PostCard;
