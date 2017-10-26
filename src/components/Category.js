import React, { Component } from 'react';

// project styles
import '../styles/All.css'
import '../styles/Category.css';

class Category extends Component {
  render() {
    return (
      <div className="container">
        <ul className="categoryList">
        	<li className="categoryItem">
        		Category
        	</li>
        </ul>
      </div>
    );
  }
}

export default Category;