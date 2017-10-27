import React, { Component } from 'react';

// icons
import FaCommenting from 'react-icons/lib/fa/commenting'
import FaThumbsUp from 'react-icons/lib/fa/thumbs-up'
import FaThumbsDown from 'react-icons/lib/fa/thumbs-down'
import MdAccountCircle from 'react-icons/lib/md/account-circle'

// project styles
import '../styles/All.css'
import '../styles/Post.css';

class Post extends Component {
  render() {
    return (
      <div>
        <div className="postContainer">
        	<div className="postRow">
        		<div className="postTitle">
        			Post Title
        		</div>
        	</div>
        	<div className="postRow">
        		<div className="postAuthorIcon">
        			<MdAccountCircle />
        		</div>
        		<div className="postAuthorName">
        			Jane
        		</div>
        	</div>
        	<div className="postRow">
        		<div className="actionList">
        			<div className="actionItem">
	        			<div className="actionCommentCount">
	        				2
	        			</div>
	        			<div className="actionComment">
	        				<FaCommenting />
	        			</div>
	        		</div>
	        		<div className="actionItem">
	        			<div className="actionThumbsUp">
	        				<FaThumbsUp />
	        			</div>
	        		</div>
	        		<div className="actionItem">
	        			<div className="actionThumbsDown">
	        				<FaThumbsDown />
	        			</div>
	        		</div>
        		</div>
        		<div className="postCategory">
        			Category
        		</div>
        	</div>
        </div>
      </div>
    );
  }
}

export default Post;