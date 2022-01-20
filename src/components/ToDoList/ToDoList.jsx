import React, {useState} from 'react';
import style from './ToDoList.module.scss'

const ToDoList = () => {

    const [inputText, setInputText] = useState('');
    const [tasks, setTasks] = useState([
        {id: 1, title: 'Сделать to do', isDone: false},
        {id: 2, title: 'Начать делать', isDone: true}
    ])

    const changeInputState = (e) => {
        setInputText(e.target.value);
    }

    const addTask = () => {
        if (inputText) {
            setTasks(prevState => ([
                {
                    id: tasks.length + 1,
                    title: inputText,
                    isDone: false
                },
                ...prevState
            ]))
            setInputText('');
        }
    }

    const changeStatus = (e) => {
        const id = Number(e.target.getAttribute('data-number'));
        const currentTask = tasks.find(task => task.id === id);
        const currentTaskIndex = tasks.findIndex(task => task.id === id);

        if (!currentTask.isDone) {
            setTasks(prevState => ([
                ...prevState.slice(0, currentTaskIndex),
                {id: currentTask.id,
                    title: currentTask.title,
                    isDone: true},
                ...prevState.slice(currentTaskIndex + 1)
            ]))
        } else {
            setTasks(prevState => ([
                ...prevState.slice(0, currentTaskIndex),
                ...prevState.slice(currentTaskIndex + 1)
            ]))
        }
    }

    const activeTasks = tasks.filter(task => !task.isDone);
    const doneTasks = tasks.filter(task => task.isDone);

    const activeList = activeTasks.map(task => <li
        key={task.id}
        data-number={task.id}
        className={style.task}>
        {task.title}
    </li>);

    const doneList = doneTasks.map(task => <li
        key={task.id}
        data-number={task.id}
        className={style.task + " " + style.task_done}>
        {task.title}
    </li>);

    return (
        <div className={style.todo}>
           <form className={style.form} onSubmit={(e)=>{
               e.preventDefault()
               addTask()
           }}>
               <input type="text" value={inputText} onChange={(e) => {changeInputState(e)}}/>
               <button>Добавить таск</button>
           </form>
            <ul className={style.list} onClick={(e) => {changeStatus(e)}}>
                {activeList}
                {doneList}
            </ul>
        </div>
    );
};

export default ToDoList;