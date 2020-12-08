import React from 'react';
import PostListImg from '../../assets/postlistimg2.jpg'
import postlisttop from '../../assets/postlisttop.jpg'
import './PostCard.scss'
import { BsHeart, BsChat, BsBookmark } from "react-icons/bs";
import { MdShare } from "react-icons/md";




function PostCard(){

	return (
		<div className="postcard">
			<div className="story">

			</div>
			{/* <!-- //story --> */}
			<div className="list">
				<div className="top">
					<a href="#">
						<img src={postlisttop} alt="profile"/>
					</a>
					<a className="nickname" href="#">HyeonSeok</a>
					<a className="more" href="#">...</a>
				</div>
				{/* <!-- //top --> */}

				<div className="img">
					<img src={PostListImg} alt="postlistimg"/>
				</div>
				{/* <!-- //img --> */}
				
				<div className="posticon">
					<div className="posticon_left">
						<a href="#">
							<BsHeart/>
						</a>
						<a href="#">
							<BsChat />
						</a>
						<a href="#">
							<MdShare />
						</a>
					</div>
					<div className="posticon_right">
						<a href="#">
							<BsBookmark/>
						</a>
					</div>
				</div>
				{/* <!-- //posticon --> */}

				<div className="comment">
						<a className="likenum" href="#">좋아요 192,731개</a>
						<a className="nickname" href="#">HyeonSeok</a>
						<a className="com_more" href="#">댓글 212개 모두 보기</a>
						<a className="com_writer" href="#">iguegumwang</a>
						<p className="ptag">유트브 볼 때마다 감탄 ㅠ</p>
						<a className="date" href="#">4일 전</a>
				</div>
				<form className="input">
					<input className="comment_input" type="text" placeholder="댓글 달기..."/>
					<input className="comment_submit" value="게시" type="submit"/>
				</form>
			</div>
			{/* <!-- // list --> */}
		</div>
		// <!-- //postcard -->
	);
}

export default PostCard;