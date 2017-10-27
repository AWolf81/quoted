import React, { Component } from 'react';
import { Modal } from 'react-modal'

// icons
import MdAddCircle from 'react-icons/lib/md/add-circle'

// project components
import NavBar from './NavBar'
import PostCard from './PostCard'

// project styles
import '../styles/Home.css'
import '../styles/All.css'


class Home extends Component {

	state = {
		newPostModalIsOpen: false,
	}

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
				<button>
					<div className="newPostButton">
						<MdAddCircle />
					</div>
				</button>
				{/* 
				<Modal isOpen={false}
					   // onAfterOpen={afterOpenFn}
					   // onRequestClose={requestCloseFn}
					   // closeTimeoutMS={n}
					   // style={customStyle}
					   contentLabel="Modal"
					   >
					<h1>Modal Content</h1>
					<p>Etc.</p>
				</Modal>
				*/}
			</div>
		);
	}
}

export default Home;