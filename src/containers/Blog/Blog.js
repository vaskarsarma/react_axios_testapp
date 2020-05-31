import React, { Component } from 'react';

import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';

import Posts from './Posts/Posts';
import Newpost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {
  render() {
    return (
      <div className='Blog'>
        <header>
          <nav>
            <ul>
              <li>
                {/* <a href="/">Home</a> */}
                <NavLink
                  to='/posts/'
                  exact
                  //activeClassName="my-test-class"
                  //activeStyle={{ color: 'red' }}
                >
                  Posts
                </NavLink>
              </li>
              <li>
                {/*<a href="/new-post">New Post</a> */}
                <NavLink
                  to={{
                    pathname: '/new-post',
                    hash: '#submit',
                    search: '?quick-submit=true',
                  }}
                >
                  New Post
                </NavLink>
                {/* <Link to="/new-post">New Post</Link> */}
              </li>
            </ul>
          </nav>
        </header>
        {/* <Posts /> */}
        {/* 
            {Route path="/" exact render={() => <Posts />} />
            <Route path="/new-post" exact render={() => <div>New Post</div>} /> */}
        <Switch>
          <Route path='/posts/' component={Posts} />
          <Route path='/new-post' component={Newpost} />
          {/* Below example to show how to redirect */}
          {/* <Route path='/' component={Posts} /> */}
          <Redirect from='/' to='/posts/' />
        </Switch>
      </div>
    );
  }
}

export default Blog;
