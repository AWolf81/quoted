import React, { Component } from 'react';
import MdAddCircle from 'react-icons/lib/md/add-circle'

// project components
import NavBar from './NavBar'
import PostCard from './PostCard'

// project styles
import '../styles/Home.css'
import '../styles/All.css'


class Home extends Component {
  render() {
    return (
	<div className="entirePostList">
		<NavBar />
		<div className="postListContainer">
			{/* map over from here */}
			<div className="postListRow">
				<PostCard />
				<PostCard />
				<PostCard />
			</div>
			<div className="postListRow">
				<PostCard />
				<PostCard />
				<PostCard />
			</div>
			<div className="postListRow">
				<PostCard />
				<PostCard />
				<PostCard />
			</div>
			<div className="postListRow">
				<PostCard />
				<PostCard />
				<PostCard />
			</div>
		</div>
		<div className="newPostButton">
			<MdAddCircle />
		</div>
	</div>
    );
  }
}

export default Home;