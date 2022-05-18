import React from 'react';
import './AddTask.css';

const AddTask = () => {
    const handleTaskSubmit = event => {
        event.preventDefault()
        const email = event.target.title.value
        const description = event.target.description.value;
        console.log(email, description)
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