import React from 'react';
import './SideBar.scss';
import profile from '../../assets/profile.jpg';
import friend from '../../assets/friend.jpg';

function SideBar(){

  return(
    <div className="sidebar">
			<div className="myprofile">
				<div className="myprofimg">
					<a href="#">
						<img src={profile} alt="나의프로필"/>
					</a>
				</div>
				<div className="myprofname">
					<a href="#" className="myprofname_a">hyeon2345</a>
					<p className="myname">김현석</p>
				</div>
				<div className="transfer">
					<a href="#">전환</a>
				</div>
			</div>
			<div className="recommend">
				<div className="recom_top">
						<p>회원님을 위한 추천</p>
						<a href="#">모두보기</a>
				</div>
				<div className="recom_friend">
					<ul>
						<li>
							<a className="friendimg" href="#">
								<img src={friend} alt="친구1"/>
							</a>
							<div className="namebox">
								<a className="friendname" href="#">
									ji_h00n2	
								</a>
								<p className="followyou">Follows you</p>
							</div>
							<a className="follow" href="#">팔로우</a>
						</li>
						<li>
							<a className="friendimg" href="#">
								<img src={friend} alt="친구1"/>
							</a>
							<div className="namebox">
								<a className="friendname" href="#">
									ji_h00n2	
								</a>
								<p className="followyou">Follows you</p>
							</div>
							<a className="follow" href="#">팔로우</a>
						</li>
						<li>
							<a className="friendimg" href="#">
								<img src={friend} alt="친구1"/>
							</a>
							<div className="namebox">
								<a className="friendname" href="#">
									ji_h00n2	
								</a>
								<p className="followyou">Follows you</p>
							</div>
							<a className="follow" href="#">팔로우</a>
						</li>
						<li>
							<a className="friendimg" href="#">
								<img src={friend} alt="친구1"/>
							</a>
							<div className="namebox">
								<a className="friendname" href="#">
									ji_h00n2	
								</a>
								<p className="followyou">Follows you</p>
							</div>
							<a className="follow" href="#">팔로우</a>
						</li>
						<li>
							<a className="friendimg" href="#">
								<img src={friend} alt="친구1"/>
							</a>
							<div className="namebox">
								<a className="friendname" href="#">
									ji_h00n2	
								</a>
								<p className="followyou">Follows you</p>
							</div>
							<a className="follow" href="#">팔로우</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
  );
}

export default SideBar ;
