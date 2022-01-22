import React from 'react';
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Tooltip from "@mui/material/Tooltip";

const ActiveTasks = (props) => {



    const tasksItems = props.tasks.map((task, index) => <ListItem
        sx={{padding: '0'}}
        key={index + task.title}
        data-id={task.id}>
        <Tooltip title="Set In Progress">
            <ListItemButton>
                <ListItemText primary={task.title} />
            </ListItemButton>
        </Tooltip>
        <Tooltip title="Delete Task">
            <IconButton aria-label="delete" sx={{borderRadius: 0}}>
                <DeleteIcon />
            </IconButton>
        </Tooltip>
    </ListItem>);

    return (
        <List>
            {tasksItems}
        </List>
    );
};

export default ActiveTasks;