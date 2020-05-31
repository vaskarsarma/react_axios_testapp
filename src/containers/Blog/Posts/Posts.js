import React, { Component } from 'react';

// import { Link } from 'react-router-dom';

import Post from '../../../components/Post/Post';

import Axios from '../../../axios';

import './Posts.css';

class Posts extends Component {
  state = {
    posts: [],
    error: false,
  };

  postClickHandler = id => {
    console.log(`postClickHandler : ${id}`);
    //this.props.history.push(`/${id}`);
    this.props.history.push({ pathname: `/${id}` });
  };

  componentDidMount() {
    //console.log("Posts >> componentDidMount");
    console.log(this.props);
    Axios.get('/feed/posts/')
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: 'Vaskar',
          };
        });
        this.setState({ posts: updatedPosts });
        //console.log(response);
      })
      .catch(err => {
        console.log(err);
        //this.setState({ error: true });
      });
  }

  render() {
    let Posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
    if (!this.state.error) {
      Posts = this.state.posts.map(post => {
        return (
          // <Link to={"/" + post.id} key={post.id}>
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            author={post.author}
            Clicked={() => this.postClickHandler(post.id)}
          />
          // </Link>
        );
      });
    }

    return <section className='Posts'>{Posts}</section>;
  }
}

export default Posts;
