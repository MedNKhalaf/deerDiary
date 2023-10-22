import React from "react";
import { useState } from "react";
import axios from "axios";
import { AiFillFileAdd } from "react-icons/ai";
import "./taskForm.css";

const TaskForm = () => {
  const [modalView, setModalview] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    tag: "",
    image: null,
  });

  const handleTitleChange = (e) => {
    setFormData({ ...formData, title: e.target.value });
  };
  const handleContentChange = (e) => {
    setFormData({ ...formData, content: e.target.value });
  };
  const handleTagChange = (e) => {
    setFormData({ ...formData, tag: e.target.value });
  };
  //   const handleImageChange = (e) => {
  //     setFormData({...formData, image: e.target.value})
  //   }

  const addTask = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000", formData)
      .then((res) => console.log(res));
  };

  const handleClickOutside = (e) => {
    if (e.target.classList[0] === "overlay") setModalview(false);
  };

  return (
    <div>
      <div className="add-btn-container">
        <button onClick={() => setModalview(true)} className="add-note-btn">
          <AiFillFileAdd />
        </button>
      </div>

      {modalView ? (
        <div onClick={handleClickOutside} className="overlay">
          <form className="add-form">
            <span onClick={() => setModalview(false)} className="x-close">
              X
            </span>
            <label htmlFor="title">Title</label>
            <input
              value={formData.title}
              id="title"
              onChange={handleTitleChange}
            />
            <label htmlFor="tag">Tag</label>
            <input value={formData.tag} id="tag" onChange={handleTagChange} />
            <label htmlFor="content">Content</label>
            <textarea
              value={formData.content}
              id="content"
              onChange={handleContentChange}
             ></textarea>
            <button onClick={addTask} type="submit">Add Task</button>
          </form>
        </div>
      ) : '' }
    </div>
  );
};

export default TaskForm;
