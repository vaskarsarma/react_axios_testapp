import React, { Component } from 'react';

import './FullPost.css';
import Axios from '../../../axios';

class FullPost extends Component {
  state = {
    loadedPost: null,
    postFound: false,
  };

  componentDidMount() {
    console.log('FullPost -> componentDidMount');
    //console.log(this.props.match.params.id); // Fetching value from within route
    this.loadData();
  }

  componentDidUpdate() {
    console.log('FullPost -> componentDidUpdate');
    this.loadData();
  }

  loadData() {
    const postId = this.props.match.params.id;

    if (postId) {
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost && this.state.loadedPost.id !== +postId) // + sign is used for interger conversion
      ) {
        Axios.get(`/feed/post/${postId}`)
          .then(response => {
            if (Object.keys(response.data).length > 0)
              this.setState({ loadedPost: response.data, postFound: true });
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }

  deletePostHandler = () => {
    Axios.delete(`/posts/${this.props.match.params.id}`)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;

    if (this.props.match.params.id) {
      post = <p style={{ textAlign: 'center' }}>Loading...</p>;
    }

    if (!this.state.postFound) {
      post = <p style={{ textAlign: 'center' }}>Invalid Post ID - not found</p>;
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
