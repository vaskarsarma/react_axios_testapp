import React, { Component } from "react";

import Post from "../../../components/Post/Post";

import Axios from "../../../axios";

import "./Posts.css";

class Posts extends Component {
  state = {
    posts: [],
    selectedID: null,
    error: false
  };

  postClickHandler = id => {
    this.setState({ selectedID: id });
  };

  componentDidMount() {
    console.log("Posts >> componentDidMount");
    console.log(this.props);
    Axios.get("/posts")
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: "Vaskar"
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
    let Posts = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
    if (!this.state.error) {
      Posts = this.state.posts.map(post => {
        return (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            author={post.author}
            Clicked={() => this.postClickHandler(post.id)}
          />
        );
      });
    }

    return <section className="Posts">{Posts}</section>;
  }
}

export default Posts;
