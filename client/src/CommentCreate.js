import React, { useState } from 'react';
import axios from 'axios';


export default function CommentCreate({ postid }) {

    const [content, setContent] = useState("");

    const onChangeHandler = (event) => {
        setContent(event.target.value)
    }

    const onSubmitHandler = async(event) => {
        event.preventDefault();
        await axios.post(`http://localhost:4001/posts/${postid}/comments`, {
            content
        });

        setContent("");
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label>New Comment</label>
                    <input value={content} className="form-control" onChange= {onChangeHandler} />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
