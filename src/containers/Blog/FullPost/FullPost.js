import React, { Component } from 'react';

import './FullPost.css';
import Axios from '../../../axios';

class FullPost extends Component {
  state = {
    loadedPost: null,
  };

  componentDidMount() {
    console.log(this.props);
    console.log(this.props.match.params.id); // Fetching value from within route
    const postId = this.props.match.params.id;
    if (postId) {
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost && this.state.loadedPost.id !== postId)
      ) {
        Axios.get(`/feed/post/${postId}`)
          .then(response => {
            console.log(response);
            this.setState({ loadedPost: response.data });
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }

  deletePostHandler = () => {
    Axios.delete(`/posts/${this.props.id}`)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;

    if (this.props.id) {
      post = <p style={{ textAlign: 'center' }}>Loading...</p>;
    }

    if (this.state.loadedPost) {
      post = (
        <div className='FullPost'>
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className='Edit'>
            <button onClick={this.deletePostHandler} className='Delete'>
              Delete
            </button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
