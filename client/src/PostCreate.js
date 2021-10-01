import React, { useState }from 'react';
import axios from "axios";

export default function PostCreate() {

    const [title, setTitle] = useState("");

    const setTitleHandler = (event) => {
        
         setTitle(event.target.value)
    }

    const submitEventHandler = async (event) => {
        event.preventDefault();
        await axios.post("http://localhost:4000/posts", {
             title
        });

        setTitle("");
    }

    return (
        <div>
            <form onSubmit = {submitEventHandler}>
                <div className="form-group">
                    <label>Title</label>
                    <input value={title} onChange={ setTitleHandler} className="form-control" type="text" />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
