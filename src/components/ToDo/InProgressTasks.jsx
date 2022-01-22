import React from 'react';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import SettingsBackupRestoreOutlinedIcon from "@mui/icons-material/SettingsBackupRestoreOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import List from "@mui/material/List";
import Tooltip from '@mui/material/Tooltip';

const InProgressTasks = (props) => {

    const tasksItems = props.tasks.map((task, index) => <ListItem
        sx={{padding: '0'}}
        key={index + task.title}
        data-id={task.id}>
        <Tooltip title="Set Done">
            <ListItemButton>
                <ListItemText primary={task.title} />
            </ListItemButton>
        </Tooltip>
        <Tooltip title="Set Active">
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

export default InProgressTasks;