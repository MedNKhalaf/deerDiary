import React, { useState } from "react";
import "./task.css";
import { BsTrash } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateTaskForm = ({ _id, title, tag, content, setModalView }) => {
  const [formData, setFormData] = useState({
    title: title,
    content: content,
    tag: tag,
  });

  const updateTask = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update it Already!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .put(`http://localhost:5000/api/update/${_id}`, formData)
          .then((_) => {
            Swal.fire("Updated!", "Your task has been updated.", "success");
            setModalView(false);
            setFormData({ ...formData, tag: "", title: "", content: "" });
          })
          .catch((err) => console.log(err));
      }
    });
  };

  const handleClickOutside = (e) => {
    if (e.target.classList[0] === "overlay") setModalView(false);
  };

  const handleTitleChange = (e) => {
    setFormData({ ...formData, title: e.target.value });
  };
  const handleContentChange = (e) => {
    setFormData({ ...formData, content: e.target.value });
  };
  const handleTagChange = (e) => {
    setFormData({ ...formData, tag: e.target.value });
  };

  return (
    <div onClick={handleClickOutside} className="overlay">
      <form className="add-form">
        <span onClick={() => setModalView(false)} className="x-close">
          X
        </span>
        <label htmlFor="title">Title</label>
        <input value={formData.title} id="title" onChange={handleTitleChange} />
        <label htmlFor="tag">Tag</label>
        <input value={formData.tag} id="tag" onChange={handleTagChange} />
        <label htmlFor="content">Content</label>
        <textarea
          required
          value={formData.content}
          id="content"
          onChange={handleContentChange}
        ></textarea>
        <button onClick={updateTask} type="submit">
          Update Task
        </button>
      </form>
    </div>
  );
};

const Task = ({ _id, title, tag, content, filterDeletedTask }) => {
  const [modalView, setModalView] = useState(false);

  const deleteTask = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/api/delete/${_id}`)
          .then((_) => {
            console.log(filterDeletedTask);
            filterDeletedTask(_id);

            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          })
          .catch((err) => console.log(err));
      }
    });
  };

  return (
    <div className="note-container">
      <div className="title-container">
        <h3 className="title">{title}</h3>
        <div className="space-between">
            <span className="tag">{tag}</span>
            <div className="note-actions">
              <BsTrash size={20} color="red" onClick={() => deleteTask()} />
              <BiEditAlt size={22} color="blue" onClick={() => setModalView(true)} />
              {modalView ? (
                <UpdateTaskForm
                  _id={_id}
                  title={title}
                  content={content}
                  tag={tag}
                  setModalView={setModalView}
                />
              ) : (
                ""
              )}
            </div>
        </div>
      </div>

      <div className="content-container">
        <p className="content">{content}</p>
      </div>
    </div>
  );
};

export default Task;
