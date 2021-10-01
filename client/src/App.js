import React from 'react';
import PostCreate from "./PostCreate";
import PostList from "./PostList";

export default function App() {
    return (
        <div className="container">
            <h1>BLOG APP</h1>
            <PostCreate />
            <hr />
            <PostList />
        </div>
    )
}
