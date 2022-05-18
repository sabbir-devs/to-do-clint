import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import "./TaskTable.css";

const TaskTable = () => {
    const [task, setTask] = useState([])
    useEffect(() => {
        fetch('https://sheltered-temple-82819.herokuapp.com/task')
        .then(res => res.json())
        .then(data => setTask(data))
    },[task])
    // console.log(task)
    const handleDelete = id => {
        console.log(id)
        const confirm = window.confirm("Are You Sure")
        if(confirm){
            const url = `https://sheltered-temple-82819.herokuapp.com/task/${id}`;
            fetch(url, {
                method:"DELETE",
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success("Task DELete Sucessfull", { id: "toast5" });
                const remining = task.filter((tasks) => tasks._id !== id)
                setTask(remining)
            })
        }
    }
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
        {
            task.map((tasks, index) => 
            <tr key={tasks._id}>
                <td>{index + 1}</td>
                <td>{tasks.name}</td>
                <td title={tasks.description}>{tasks.description.slice(0, 20)}</td>
                <td style={{textAlign:'center'}}><button className="task-delete-btn" onClick={() => handleDelete(tasks._id)}>Delete</button></td>
            </tr>
        )
        }
        
      </tbody>
    </table>
  );
};

export default TaskTable;
// https://sheltered-temple-82819.herokuapp.com/