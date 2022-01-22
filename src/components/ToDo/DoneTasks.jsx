import React from 'react';
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import SettingsBackupRestoreOutlinedIcon from "@mui/icons-material/SettingsBackupRestoreOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import List from "@mui/material/List";
import Tooltip from "@mui/material/Tooltip";

const DoneTasks = (props) => {

    const tasksItems = props.tasks.map((task, index) => <ListItem
        sx={{padding: '0'}}
        key={index + task.title}
        data-id={task.id}>
        <ListItemText primary={task.title} />
        <Tooltip title="Set In Progress">
            <IconButton aria-label="back" sx={{borderRadius: 0}}>
                <SettingsBackupRestoreOutlinedIcon />
            </IconButton>
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

export default DoneTasks;