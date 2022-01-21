import React from 'react';

const TaskList = (props) => {

    const activeTasks = props.tasks.filter(task => !task.isDone);
    const doneTasks = props.tasks.filter(task => task.isDone);

    const activeList = activeTasks.map(task => <li
        tabIndex="0"
        key={Math.floor(Math.random() * 1000000)}
        data-number={task.id}>
        {task.title}
    </li>);

    const doneList = doneTasks.map(task => <li
        tabIndex="0"
        key={Math.floor(Math.random() * 1000000)}
        data-number={task.id}>
        {task.title}
    </li>);

    return (
        <ul onClick={(e) => {props.changeStatus(e)}}>
            {activeList}
            {(!!doneTasks.length && !!activeTasks.length) && <li/>}
            {doneList}
        </ul>
    );
};

export default TaskList;