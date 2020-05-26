import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from "axios";

class Blog extends Component {
    state = {
        posts: [],
        selectedID: null
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
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
            });
    }

    postClickHandler = (id) => {
        // console.log(id);
        // const posts =[...this.state.posts];
        // const post = posts.find(p => p.id === id);
        // this.setState({viewPost:post});
        // console.log(post.title);
        // console.log(post.body);
        this.setState({selectedID:id});
    }

    render() {
        const Posts = this.state.posts.map(post => {
            return <Post 
                        key={post.id} 
                        id={post.id} 
                        title={post.title} 
                        author={post.author} 
                        Clicked={()=>this.postClickHandler(post.id)} />
        });

        return (
            <div>
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