import React from 'react';
import AddTask from '../AddTask/AddTask';
import TaskTable from '../TaskTable/TaskTable';
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <AddTask></AddTask>
            <TaskTable></TaskTable>
        </div>
    );
};

export default Home;