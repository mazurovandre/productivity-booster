import './App.sass';
import Pomodoro from "./components/Pomodoro/Pomodoro";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {
    return (
        <div className="App">
            <h1 className="title">Productivity Booster</h1>
            <div className="wrapper">
                <Pomodoro/>
                <ToDoList />
            </div>
        </div>
    );
}

export default App;
