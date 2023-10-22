import React, { useEffect, useState } from "react";
import Task from "./Task";
import "./list.css";
import axios from "axios";
import { BiSearchAlt } from "react-icons/bi";
import { BsFilterLeft } from "react-icons/bs";

const List = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);

  const [tagFilter, setTagfilter] = useState({ view: false, selectedTag: "", tags:[] });

  const handleTagSelect = () => {

  }


  useEffect(() => {
    getTasks()
      .then((res) => {
        setTasks(res.data);
        setFilteredTasks(res.data);
        setTagfilter({tags: new Set(filteredTasks.map(task => task.tag))})
      })
      .catch((err) => console.log(err));
  }, [tasks]);

  const searchTasks = (e) => {
    let query = e.target.value;
    let filtered = tasks.filter((task) => {
      return (
        task.title.toLowerCase().includes(query.toLowerCase()) ||
        task.content.toLowerCase().includes(query.toLowerCase())
      );
    });
    setFilteredTasks(filtered);
  };

  const filterDeletedTask = (id) => {
    tasks.filter((task) => task._id !== id);
  };

  const getTasks = () => {
    return axios.get("http://localhost:5000/api/get");
  };

  return (
    <div>
      <div className="search-box">
        <BiSearchAlt color="white" size={40} className="search-icon" />
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          onChange={(e) => searchTasks(e)}
        />
        <BsFilterLeft onClick={() => console.log(tagFilter.tags)} color="white" size={45} />
        {
          tagFilter.view ?
          <select>
            {tagFilter.tags.map(tag => <option>{tag}</option>)}
          </select> : ''
        }
      </div>

      <ul className="list-container">
        {tasks.length
          ? filteredTasks.map((task) => (
              <li key={task._id}>
                <Task filterDeletedTask={filterDeletedTask} {...task} />
              </li>
            ))
          : ""}
      </ul>
    </div>
  );
};

export default List;
