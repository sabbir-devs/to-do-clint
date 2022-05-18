import React from "react";
import "./TaskTable.css";

const TaskTable = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>No:</th>
          <th>Task Name</th>
          <th>Description</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>2</td>
          <td>0</td>
          <td>3</td>
          <td>4</td>
        </tr>
        
      </tbody>
    </table>
  );
};

export default TaskTable;
