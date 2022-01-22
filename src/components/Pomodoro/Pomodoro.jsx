import React, {useState} from 'react';
import SoundCloud from "./SoundCloud";
import Timer from "./Timer";
import Box from "@mui/material/Box";

const Pomodoro = () => {

    const [isCounting, setIsCounting] = useState(false);
    const [isWorking, setIsWorking] = useState(true);

    const toggleIsCounting = () => {
        setIsCounting(prevState => !prevState)
    };

    const changeTimerType = (isWork) => {
        setIsWorking(isWork)
    };

    return (
        <Box>
            <Timer
                isCounting={isCounting}
                isWorking={isWorking}
                toggleIsCounting={toggleIsCounting}
                changeTimerType={changeTimerType}
            />
            <SoundCloud isPlaying={isCounting && isWorking}/>
        </Box>
    );
};

export default Pomodoro;