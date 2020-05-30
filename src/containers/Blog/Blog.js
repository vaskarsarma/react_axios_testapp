import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from "axios";

class Blog extends Component {
    state = {
        posts: [],
        selectedID: null,
        error: false
    }

    componentDidMount() {
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: "Vaskar"
                    }
                });
                this.setState({ posts: updatedPosts });
                //console.log(response);
            }).catch(err => {
                console.log(err);
                this.setState({ error: true });
            });
    }

    postClickHandler = (id) => {
        this.setState({ selectedID: id });
    }

    render() {
        let Posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
        if (!this.state.error) {
            Posts = this.state.posts.map(post => {
                return <Post
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    author={post.author}
                    Clicked={() => this.postClickHandler(post.id)} />
            });
        }

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <section className="Posts">
                    {Posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedID} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;