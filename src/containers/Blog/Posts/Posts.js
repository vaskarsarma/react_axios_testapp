import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import Post from '../../../components/Post/Post';

import Axios from '../../../axios';

import './Posts.css';

import FullPost from '../FullPost/FullPost';

class Posts extends Component {
  state = {
    posts: [],
    error: false,
  };

  postClickHandler = id => {
    console.log(`postClickHandler : ${id}`);
    this.props.history.push(`/posts/${id}`);
    //this.props.history.push({ pathname: `/posts/${id}` });
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
          // <Link to={"/posts/" + post.id} key={post.id}>
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

    return (
      <div>
        <section className='Posts'>{Posts}</section>
        {/* <Route path='/posts/:id' exact component={FullPost} /> */}
        <Route
          path={this.props.match.url + '/:id'}
          exact
          component={FullPost}
        />
        {/* <Route
          path={this.props.match.url + '/:id'}
          exact
          component={FullPost}
        /> */}
      </div>
    );
  }
}

export default Posts;
