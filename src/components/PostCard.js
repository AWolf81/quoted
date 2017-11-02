import React, { Component } from 'react';

// utils
import { capitalize, convertTimeStamp } from '../utils/helpers'

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
    const { postCard } = this.props

    return (
        <div>
            <div className="postContainer">
                <div className="postAlign">
                	<div className="postRow">
                		<div className="postTitle">
                			{postCard.title}
                		</div>
                	</div>
                	<div className="postRow">
                		<div className="postAuthorIcon">
                			<MdAccountCircle />
                		</div>
                		<div className="postAuthorName">
                			{capitalize(postCard.author)}&nbsp;
                            <span className="postTimeStamp">
                                / { convertTimeStamp(postCard) }
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