import React, { Component } from 'react';

// icons
import FaQuoteLeft from 'react-icons/lib/fa/quote-left'
import FaThumbsUp from 'react-icons/lib/fa/thumbs-up'
import FaThumbsDown from 'react-icons/lib/fa/thumbs-down'
import MdAccountCircle from 'react-icons/lib/md/account-circle'

// project styles
import '../styles/All.css'
import '../styles/PostCard.css';

class PostCard extends Component {
  render() {
    return (
    <div>
        <div className="postContainer">
            <div className="postAlign">
            	<div className="postRow">
            		<div className="postTitle">
            			This is a post title, I'd like to see how long it can go.
            		</div>
            	</div>
            	<div className="postRow">
            		<div className="postAuthorIcon">
            			<MdAccountCircle />
            		</div>
            		<div className="postAuthorName">
            			Jane&nbsp;
                        <span className="postTimeStamp">
                            / Jan 12 @ 4PM
                        </span>
            		</div>
            	</div>
            	<div className="postRow">
            		<div className="actionList">
            			<div className="actionItem">
                			<div className="actionCommentCount">
                				2
                			</div>
                			<div className="actionComment">
                				<FaQuoteLeft />
                			</div>
                		</div>
                		<div className="actionItem">
                			<button className="actionThumbsUp">
                				<FaThumbsUp />
                			</button>
                		</div>
                		<div className="actionItem">
                			<button className="actionThumbsDown">
                				<FaThumbsDown />
                			</button>
                		</div>
                        <div className="voteScore">
                            <div className="voteScoreCount">
                                +8
                            </div>
                        </div>
            		</div>
            		<div className="postCategory">
            			Things
            		</div>
            	</div>
            </div>
        </div>
    </div>
    );
  }
}

export default PostCard;