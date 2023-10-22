import React from "react";
import Task from "./Task";
import "./list.css";

const List = ({ id, task, setUpdateUI, updateMode }) => {
  return (
    <>
      <ul className="list-container">
        <li>
          <Task />
        </li>
        <li>
          <Task />
        </li>
        <li>
          <Task />
        </li>
        <li>
          <Task />
        </li>
      </ul>
    </>
  );
};

export default List;
