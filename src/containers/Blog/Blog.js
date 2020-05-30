import React, { Component } from "react";

import { Route, Link } from "react-router-dom";

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
                {/* <a href="/">Home</a> */}
                <Link to="/">Home</Link>
              </li>
              <li>
                {/*<a href="/new-post">New Post</a> */}
                <Link
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true"
                  }}
                >
                  New Post
                </Link>
                {/* <Link to="/new-post">New Post</Link> */}
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
