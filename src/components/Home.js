import React, { Component } from 'react';

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
			<div className="postListColumn">
				<PostCard />
				<PostCard />
				<PostCard />
			</div>
			<div className="postListColumn">
				<PostCard />
				<PostCard />
				<PostCard />
			</div>
			<div className="postListColumn">
				<PostCard />
				<PostCard />
				<PostCard />
			</div>
		</div>
	</div>
    );
  }
}

export default Home;