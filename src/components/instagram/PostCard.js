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
			<div className="list">
				<div className="top">
					<a href="#">
						<img src={postlisttop} alt="profile"/>
					</a>
					<a className="nickname" href="#">HyeonSeok</a>
					<a className="more" href="#">...</a>
				</div>
				<div className="img">
					<img src={PostListImg} alt="postlistimg"/>
				</div>
				<div className="posticon">
					<div className="posticon_left">
						<BsHeart/>
						<BsChat />
						<MdShare />
					</div>
					<div className="posticon_right">
						<BsBookmark/>
					</div>
				</div>
				<div className="input"></div>
			</div>
		</div>
	);
}

export default PostCard;