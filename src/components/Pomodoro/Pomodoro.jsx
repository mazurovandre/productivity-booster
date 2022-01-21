import React, {useState} from 'react';
import SoundCloud from "./SoundCloud";
import Timer from "./Timer";

const Pomodoro = () => {

    const [isCounting, setIsCounting] = useState(false);
    const [isWorking, setIsWorking] = useState(false);

    const toggleIsCounting = () => {
        setIsCounting(prevState => !prevState)
    }

    const changeTimerType = (isWork) => {
        setIsWorking(prevState => isWork)
    }

    return (
        <div className="pomodoro">
            <Timer
                isCounting={isCounting}
                isWorking={isWorking}
                toggleIsCounting={toggleIsCounting}
                changeTimerType={changeTimerType}
            />
            <SoundCloud isPlaying={isCounting && isWorking}/>
        </div>
    );
};

export default Pomodoro;