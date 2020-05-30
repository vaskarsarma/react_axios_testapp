import React, { Component } from "react";

import { Route } from "react-router-dom";

import "./Blog.css";

import Posts from "./Posts/Posts";
import Newpost from "./NewPost/NewPost";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/new-post">New Post</a>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Posts /> */}
        {/* 
            {Route path="/" exact render={() => <Posts />} />
            <Route path="/new-post" exact render={() => <div>New Post</div>} /> */}

        <Route path="/" exact component={Posts} />
        <Route path="/new-post" exact component={Newpost} />
      </div>
    );
  }
}

export default Blog;
