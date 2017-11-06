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
    const { post } = this.props

    return (
        <div>
            <div key={post.id} className="postContainer">
            {console.log('key 2: ', post.id)}
                <div className="postAlign">
                	<div className="postRow">
                		<div key={post.title} className="postTitle">
                			{capitalize(post.title)}
                		</div>
                	</div>
                	<div className="postRow">
                		<div className="postAuthorIcon">
                			<MdAccountCircle />
                		</div>
                		<div key={post.author} className="postAuthorName">
                			{capitalize(post.author)}&nbsp;
                            <span key={post.timestamp} className="postTimeStamp">
                                / { convertTimeStamp(post) }
                            </span>
                		</div>
                	</div>
                	<div className="postRow">
                		<div className="actionList">
                			<div className="actionItem">
                    			<div key={post.commentCount} className="actionCommentCount">
                    				{post.commentCount}
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
                                <div key={post.voteScore} className="voteScoreCount">
                                    {post.voteScore}
                                </div>
                            </div>
                		</div>
                		<div key={post.category} className="postCategory">
                			{capitalize(post.category)}
                		</div>
                	</div>
                </div>
            </div>
        </div>
        );
    }
}

export default PostCard;