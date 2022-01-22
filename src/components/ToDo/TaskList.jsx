import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ActiveTasks from "./ActiveTasks";
import InProgressTasks from "./InProgressTasks";
import DoneTasks from "./DoneTasks";

const TaskList = (props) => {

    const activeTasks = props.tasks.filter(task => task.status === 0);
    const inProgressTasks = props.tasks.filter(task => task.status === 1);
    const doneTasks = props.tasks.filter(task => task.status === 2);

    const [value, setValue] = useState('0');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleClick = (e) => {
        e.stopPropagation();

        let id = e.target.closest('li');
        let typeButton = e.target.closest('button');

        if (id) id = id.getAttribute('data-id');
        if (typeButton) typeButton = typeButton.getAttribute('aria-label');

        if (typeButton === 'delete' && id) props.deleteTask(id);
        if (typeButton === 'back' && id) props.getBackTask(id);
        if (typeButton === null && id) props.getDoneTask(id);
    }

    return (
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: '10px' }}>
                <TabList onChange={handleChange} aria-label="Tasks Types">
                    <Tab label="Active" value="0" disabled={!activeTasks.length}/>
                    <Tab label="In Progress" value="1" disabled={!inProgressTasks.length}/>
                    <Tab label="Done" value="2" disabled={!doneTasks.length}/>
                </TabList>
            </Box>
            <TabPanel value="0" sx={{padding: '0'}} onClick={handleClick}>
                <ActiveTasks tasks={activeTasks}/>
            </TabPanel>
            <TabPanel value="1" sx={{padding: '0'}} onClick={handleClick}>
                <InProgressTasks tasks={inProgressTasks}/>
            </TabPanel>
            <TabPanel value="2" sx={{padding: '0'}} onClick={handleClick}>
                <DoneTasks tasks={doneTasks}/>
            </TabPanel>
        </TabContext>
    );
};

export default TaskList;