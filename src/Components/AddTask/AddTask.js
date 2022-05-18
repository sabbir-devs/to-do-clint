import React from 'react';
import toast from 'react-hot-toast';
import './AddTask.css';

const AddTask = () => {
    const handleTaskSubmit = event => {
        event.preventDefault()
        const name = event.target.title.value
        const description = event.target.description.value;
        const data = {name, description};
        fetch(`https://sheltered-temple-82819.herokuapp.com/task`, {
            method:"POST",
            headers:{
                "content-type" : "application/json",
            },
            body: JSON.stringify({data}),
        })
        .then((res) => res.json())
        .then(data => {
            console.log('success', data)
            toast.success("Task Add Sucessfull", { id: "toast5" });
        } )
    }
    return (
        <div className='add-task'>
            <form className='task-form' onSubmit={handleTaskSubmit}>
                <h1>Add Task</h1>
                <input className='task-input' type="text" name="title" id="" placeholder='Title' required/>
                <textarea className='task-input' placeholder='Description' name="description" id="" rows="5"></textarea>
                <input className='add-task-btn' type="submit" value="Add Task" />
            </form>
        </div>
    );
};

export default AddTask;