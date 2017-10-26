import React, { Component } from 'react';

// project components
import NavBar from './NavBar'
import Post from './Post'

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
				<Post />
				<Post />
				<Post />
			</div>
			<div className="postListColumn">
				<Post />
				<Post />
				<Post />
			</div>
			<div className="postListColumn">
				<Post />
				<Post />
				<Post />
			</div>
		</div>
	</div>
    );
  }
}

export default Home;