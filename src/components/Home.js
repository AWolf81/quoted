import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import Loading from 'react-loading'

// icons
import MdAddCircle from 'react-icons/lib/md/add-circle'
import FaClose from 'react-icons/lib/fa/close'
import FaQuoteLeft from 'react-icons/lib/fa/quote-left'
import MdAccountCircle from 'react-icons/lib/md/account-circle'
import FaThumbsUp from 'react-icons/lib/fa/thumbs-up'
import FaThumbsDown from 'react-icons/lib/fa/thumbs-down'

// project components
import NavBar from './NavBar'
import PostCard from './PostCard'

// project styles
import '../styles/Home.css'
import '../styles/All.css'

import * as API from '../utils/api.js';


class Home extends Component {

	state = {
		receivedData: [],
		loadingCreatePost: false,
		loadingDetailsPost: false,
		createPostModalOpen: false,
		detailsPostModalOpen: false,
	}

	componentDidMount() { // returns expected
		API.fetchPosts().then(data => (
			console.log('Fetched the React way: ', data)
		));
	}

	openDetailsPostModal = () => this.setState(() => ({ detailsPostModalOpen: true }))
	closeDetailsPostModal = () => this.setState(() => ({ detailsPostModalOpen: false }))
	openCreatePostModal = () => this.setState(() => ({ createPostModalOpen: true }))
	closeCreatePostModal = () => this.setState(() => ({ createPostModalOpen: false }))

	render() {
		const { receivedData, loadingDetailsPost, loadingCreatePost, detailsPostModalOpen, createPostModalOpen } = this.state
		console.log('Fetched the Redux way: ', this.props)

		return (
			<div className="entirePostList">
				<NavBar />
				<div className="postListContainer">
					<div className="postListRow">
						{receivedData.map((postList, index) => (
							<div key={index} onClick={this.openDetailsPostModal}>
								<PostCard key={postList.postId} postCard={postList} />
							</div>
						))}
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
											<div className="white">
												<div className="postEditorAuthorAlign">
													<MdAccountCircle />
													<div className="postEditorAuthor">
														Jane
													</div>
													<div className="postEditorAuthor">
														/ Jan 12 @ 4PM
													</div>
												</div>
											</div>
											<button className="gold"
													onClick={this.closeDetailsPostModal}>
												<FaClose />
											</button>
										</div>
										<div className="postEditorMain">
											<div className="postEditorRow">
												<div className="postEditorTitle">
													This is a post title. I'd like to see how long it can go.
												</div>
											</div>
											<div className="postEditorRow">
												<div className="postEditorActionItems">
													<div className="postEditorActionItem">
							                			<div className="actionCommentCount">
							                				2
							                			</div>
							                			<div className="actionComment">
							                				<FaQuoteLeft />
							                			</div>
							                		</div>
							                		<div className="postEditorActionItem">
														<button className="postEditorThumbsUp">
															<FaThumbsUp />
														</button>
													</div>
													<div className="postEditorActionItem">
														<button className="postEditorThumbsDown">
															<FaThumbsDown />
														</button>
													</div>
													<div className="postEditorActionItem">
														<div className="postEditorVoteScore">
								                            <div className="postEditorVoteScoreCount">
								                                +8
								                            </div>
								                        </div>
								                    </div>
							                        <div className="postEditorActionItem">
														<div className="postEditorCategory">
															Things
														</div>
													</div>
												</div>
											</div>
											<div className="postEditorRow">
												<div className="postEditorBody">
													Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo, orci a placerat accumsan, erat quam placerat lacus, et fringilla nunc lorem eget lectus. Donec posuere neque nec rhoncus mattis. Morbi euismod mattis tortor ut ornar eget lectus. Donec posuere neque nec rhoncus mattis. Morbi euismod mattis tortor ut ornar
												</div>
											</div>
											<div className="postEditorRow">
												<button className="gold">
													Edit
												</button>
											</div>
											<div className="postEditorRow">
												<div className="postEditorLineBreak" />
											</div>
											<div className="postEditorRow">
												<div className="postEditorCommentTitleAlign">
													<div className="gold">
														<FaQuoteLeft />
													</div>
													<div className="postEditorCommentTitle">
														Leave a reply
													</div>
												</div>
											</div>
											<div className="postEditorReplyBlock">
												<div className="postEditorReplyBlockAlign">
													<div className="postEditorRow">
														<div className="postEditorReplyMain">
															<div className="postEditorReplyRow">
																<div className="postEditorReplyName">
																	<div className="postEditorReplyNamePrompt">
																		Name 
																	</div>
																	<input type="text" />
																</div>
															</div>
															<div className="postEditorReplyRow">
																<div className="postEditorReplyContent">
																	<div className="postEditorReplyContentPrompt">
																		Reply
																	</div>
																	<textarea className="postEditorReplyInput" type="text" />
																</div>
															</div>
															<div className="postEditorRow">
																<button className="postEditorReplyToCommentAlign">
																	<div className="postEditorReplyToCommentText gold">
																		Submit
																	</div>
																</button>
															</div>
														</div>
													</div>
												</div>
											</div>{/* REPLY BLOCK END */}
											<div className="postEditorRow">
												<div className="postEditorCommentTitleAlign">
													<div className="gold">
														<FaQuoteLeft />
													</div>
													<div className="postEditorCommentTitle">
														Comments
													</div>
												</div>
											</div>
											<div className="postEditorCommentBlock">
												<div className="postEditorCommentBlockAlign">
													<div className="postEditorRow">
														<div className="postEditorCommentMain">
															<div className="postEditorCommentText">
																Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo, orci a placerat accumsan, erat quam placerat lacus, et fringilla nunc lorem eget lectus. Donec posuere neque nec rhoncus m
															</div>
															<button className="postEditorCommentClose">
																<FaClose />
															</button>
														</div>
														<div className="postEditorRow">
															<div className="postEditorCommentActionItems">
																<div className="postEditorAuthorAlign postEditorActionItem">
																	<MdAccountCircle />
																	<div className="postEditorAuthor">
																		Jane
																	</div>
																	<div className="postEditorAuthor">
																		/ Jan 12 @ 4PM
																	</div>
																</div>
										                		<div className="postEditorActionItem">
																	<button className="postEditorThumbsUp">
																		<FaThumbsUp />
																	</button>
																</div>
																<div className="postEditorActionItem">
																	<button className="postEditorThumbsDown">
																		<FaThumbsDown />
																	</button>
																</div>
																<div className="postEditorActionItem">
																	<div className="postEditorVoteScore">
											                            <div className="postEditorVoteScoreCount">
											                                +8
											                            </div>
											                        </div>
											                    </div>
															</div>
														</div>
														<div className="postEditorRow">
															<div className="postEditorActionOnComment">
																<button className="postEditorReplyToCommentAlign marg">
																	<div className="postEditorReplyToCommentText gold">
																		Reply
																	</div>
																</button>
																<button className="postEditorReplyToCommentAlign marg">
																	<div className="postEditorReplyToCommentText gold">
																		Edit
																	</div>
																</button>
															</div>
														</div>
													</div>
												</div>
											</div>{/* COMMENT BLOCK END */}
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
									<div className="postEditorContainerTwo">
										<div className="postEditorRowAlign">
											<div className="postEditorRow modalTwoHeaderAlign">
												<div className="postEditorCommentTitleAlign">
													<div className="gold">
														<FaQuoteLeft />
													</div>
													<div className="postEditorCommentTitle">
														Write a post
													</div>
												</div>
												<button className="postEditorHeaderItem gold"
													onClick={this.closeCreatePostModal}>
													<FaClose />
												</button>
											</div>
											<div className="postEditorReplyBlock">
												<div className="postEditorReplyBlockAlign">
													<div className="postEditorRow">
														<div className="postEditorReplyMain">
															<div className="postEditorReplyRow">
																<div className="postEditorReplyName">
																	<div className="postEditorReplyNamePrompt">
																		Name 
																	</div>
																	<input type="text" />
																</div>
															</div>
															<div className="postEditorReplyRow">
																<div className="postEditorReplyContent">
																	<div className="postEditorReplyContentPrompt">
																		Reply
																	</div>
																	<textarea className="postEditorReplyInput" type="text" />
																</div>
															</div>
															<div className="postEditorRow">
																<button className="postEditorReplyToCommentAlign">
																	<div className="postEditorReplyToCommentText gold">
																		Submit
																	</div>
																</button>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>{/* REPLY BLOCK END */}
									</div>
								</div>
						}
					</div>
		        </Modal>
			</div>
		);
	}
}

function mapStateToProps(posts) {
	return {
		posts
	}
}

export default connect(mapStateToProps)(Home)



