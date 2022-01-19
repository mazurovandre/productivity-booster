import './App.sass';
import Pomodoro from "./components/Pomodoro/Pomodoro";

function App() {
    return (
        <div className="App">
            <h1 className="title">Productivity Booster</h1>
            <div className="wrapper">
                <Pomodoro/>
            </div>
        </div>
    );
}

export default App;
