import React, { Component } from 'react';

// project components
import Category from '../components/Category'

// project styles
import '../styles/All.css'
import '../styles/NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="navContainer type">
        	<div className="navAlign">
		    	{/* map over category later */}
		    	<div className="navLogo">
		    		Mantel
		    	</div>
		    	<div className="navCategories">
		        	<Category />
		        </div>
		        <div className="sortByContainer">
		        	<div className="sortByAlign">
			        	<div className="sortBy">
			        		Sort by: 
			        	</div>
			        </div>
		        	<div className="sortByOptions">
			        	<div className="sortByOptionA">
			        		Vote Score
			        	</div>
			        	<div className="sortByOptionB">
			        		Time Posted
			        	</div>
			        </div>
		        </div>
		    </div>
        </div>
      </div>
    );
  }
}

export default NavBar;