import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import { TagsInput } from 'react-tag-input-component';
import "react-quill/dist/quill.snow.css"; 
import "./Question.css";
import {useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom';
import { selectUser } from '../../features/userSlice';
import axios from 'axios';

function Question() {

  const user=useSelector(selectUser)
  
const [loading,setLoading]=useState(false);

  const [title,setTitle] =  React.useState("")
  const [body,setBody] = React.useState("")
  const [tags,setTags] =  React.useState([])

  const history = useHistory()

  const handleQuill = (value) => {
    setBody(value);
  };

  const handleSubmit = async (e) => {
        e.preventDefault();
        if(title!=="" && body !=="")
          {
              setLoading(true)
            const bodyJSON={
               title:title,
                body:body,
                tags:JSON.stringify(tags),
                user:user,
            };
            await axios
            .post("https://get-your-qanda.herokuapp.com/api/question", bodyJSON)
            .then((res) => {
                alert("Question added successfully")
                setLoading(false)
                history.push("/")
            }).catch((error)=>
            {
                console.log(error)
                setLoading(false)
            })
        }
    }

  return (
    <div className="add-question">
      <div className="add-question-container">
        <div className="head-title">
          <h1>Ask a public question</h1>
        </div>
        <div className="question-container">
          <div className="question-options">
            <div className="question-option">
              <div className="title">
                <h3>Title</h3>
                <small>
                  Be specific and imagine you're asking a question to another
                  person
                </small>
                <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="e.g Is there an R function for finding teh index of an element in a vector?" />
                
              </div>
            </div>
            <div className="question-option">
              <div className="title">
                <h3>Body</h3>
                <small>
                  Include all the information someone would need to answer your
                  question
                </small>
                <ReactQuill value={body} onChange={handleQuill} className="react-quill" theme="snow" />
              </div>
            </div>
            <div className="question-option">
              <div className="title">
                <h3>Tags</h3>
                <small>
                  Add up to 5 tags to describe what your question is about
                </small>
                
                
                <TagsInput name="tags"
                value={tags}
                onChange={setTags}
                 placeHolder='press enter to add new tag'
                 className="tagsinput" />

              </div>
            </div>
          </div>
        </div>
        <button className="button" disabled={loading} onClick={handleSubmit}>
        {loading?"Adding Question...":"Add your question"}
        </button>
      </div>
    </div>
  );
}

export default Question;
