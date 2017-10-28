import React, { Component } from 'react';
import Modal from 'react-modal'
import Loading from 'react-loading'

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
		loadingCreatePost: false,
		createPostModalOpen: false,
		detailsPostModalOpen: false,
	}

	openDetailsPostModal = () => this.setState(() => ({ detailsPostModalOpen: true }))
	closeDetailsPostModal = () => this.setState(() => ({ detailsPostModalModalOpen: false }))
	openCreatePostModal = () => this.setState(() => ({ createPostModalOpen: true }))
	closeCreatePostModal = () => this.setState(() => ({ createPostModalModalOpen: false }))

	render() {
		const { loadingCreatePost, detailsPostModalOpen, createPostModalOpen } = this.state

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
				<button className="newPostButton"
						onClick={this.openCreatePostModal}>
					<MdAddCircle />
				</button>
				
				<Modal
		          className='modal'
		          overlayClassName='overlay'
		          isOpen={createPostModalOpen}
		          onRequestClose={this.closeCreatePostModal}
		          contentLabel='Modal'
		        >
					<div>
						{loadingCreatePost === true
							?  <Loading type='bubbles' delay={200} color='fed80a' />
							: <div>
								
							  </div>
						}
					</div>
		        </Modal>
			</div>
		);
	}
}

export default Home;