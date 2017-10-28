import React, { Component } from 'react';
import Modal from 'react-modal'
import Loading from 'react-loading'

// icons
import MdAddCircle from 'react-icons/lib/md/add-circle'
import FaClose from 'react-icons/lib/fa/close'
import FaQuoteLeft from 'react-icons/lib/fa/quote-left'

// project components
import NavBar from './NavBar'
import PostCard from './PostCard'

// project styles
import '../styles/Home.css'
import '../styles/All.css'


class Home extends Component {

	state = {
		loadingCreatePost: false,
		loadingDetailsPost: false,
		createPostModalOpen: false,
		detailsPostModalOpen: false,
	}

	openDetailsPostModal = () => this.setState(() => ({ detailsPostModalOpen: true }))
	closeDetailsPostModal = () => this.setState(() => ({ detailsPostModalOpen: false }))
	openCreatePostModal = () => this.setState(() => ({ createPostModalOpen: true }))
	closeCreatePostModal = () => this.setState(() => ({ createPostModalOpen: false }))

	render() {
		const { loadingDetailsPost, loadingCreatePost, detailsPostModalOpen, createPostModalOpen } = this.state

		return (
			<div className="entirePostList">
				<NavBar />
				<div className="postListContainer">
					{/* map over from here */}
					<div className="postListRow">
						<button onClick={this.openDetailsPostModal}>
							<PostCard />
						</button>
						<button onClick={this.openDetailsPostModal}>
							<PostCard />
						</button>
						<button onClick={this.openDetailsPostModal}>
							<PostCard />
						</button>
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
				
				<Modal // VIEW POST DETAILS MODAL
		          className='modal'
		          overlayClassName='createOverlay'
		          isOpen={detailsPostModalOpen}
		          onRequestClose={this.closeDetailsPostModal}
		          contentLabel='Modal'
		        >
					<div>
						{loadingDetailsPost === true
							?   <div>
									<div className="postEditorBg" />
									<Loading type='bubbles' 
											 delay={200} 
											 color='#fed80a' 
											 className="loading"
											 width={120} />
								</div>
							:   <div>
							    	<div className="postEditorBg" />
									<div className="postEditorContainer">
										<div className="postEditorHeader">
											<div className="postEditorHeaderItem">
												{/* empty for now */}
											</div>
											<div className="postEditorHeaderItem">
												<FaQuoteLeft />
											</div>
											<button className="postEditorHeaderItem"
													onClick={this.closeDetailsPostModal}>
												<FaClose />
											</button>
										</div>
									</div>
								</div>
						}
					</div>
		        </Modal>

				<Modal // CREATE POST MODAL
		          className='modal'
		          overlayClassName='createOverlay'
		          isOpen={createPostModalOpen}
		          onRequestClose={this.closeCreatePostModal}
		          contentLabel='Modal'
		        >
					<div>
						{loadingCreatePost === true
							?   <div>
									<div className="postEditorBg" />
									<Loading type='bubbles' 
											 delay={200} 
											 color='#fed80a' 
											 className="loading"
											 width={120} />
								</div>
							:   <div>
							    	<div className="postEditorBg" /> 
									<div className="postEditorContainer">
										<div className="postEditorHeader">
											<div className="postEditorHeaderItem">
												{/* empty for now */}
											</div>
											<div className="postEditorHeaderItem">
												<FaQuoteLeft />
											</div>
											<button className="postEditorHeaderItem"
													onClick={this.closeCreatePostModal}>
												<FaClose />
											</button>
										</div>
									</div>
								</div>
						}
					</div>
		        </Modal>
			</div>
		);
	}
}

export default Home;