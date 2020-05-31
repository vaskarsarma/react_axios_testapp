import React, { Component } from 'react';

import { Route, NavLink, Switch } from 'react-router-dom';

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
                  to='/'
                  exact
                  //activeClassName="my-test-class"
                  //activeStyle={{ color: 'red' }}
                >
                  Home
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
          <Route path='/' exact component={Posts} />
          <Route path='/new-post' component={Newpost} />
          <Route path='/:id' exact component={FullPost} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
