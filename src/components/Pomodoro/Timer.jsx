import React, {useEffect, useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Timer = (props) => {

    const initialWorkTime = 1500;
    const initialBreakTime = 300;

    const [workSeconds, setWorkSeconds] = useState(initialWorkTime);
    const [breakSeconds, setBreakSeconds] = useState(initialBreakTime);

    useEffect(() => {
        if(props.isCounting) {
            const timer = setTimeout(() => {
                props.isWorking ? countDown(true) : countDown(false);
                if (props.isWorking && workSeconds === 0) { changeTimer(false) }
                if (!props.isWorking && breakSeconds === 0) { changeTimer(true) }
            }, 1000);
            return () => clearTimeout(timer);
        }
    });

    const countDown = (isWorkTimer) => {
        isWorkTimer ?
            setWorkSeconds(prevState => prevState - 1) :
            setBreakSeconds(prevState => prevState - 1)
    }

    const changeTimer = (isSetWorkTimer) => {
        props.changeTimerType(isSetWorkTimer);
        setWorkSeconds(initialWorkTime);
        setBreakSeconds(initialBreakTime);
    };

    const startTimer = () => {
        props.toggleIsCounting()
    };

    const resetTimer = () => {
        setWorkSeconds(initialWorkTime);
        setBreakSeconds(initialBreakTime);
    };

    const addMinute = () => {
        if (props.isWorking) {
            setWorkSeconds(prevState => prevState + 60)
        } else {
            setBreakSeconds(prevState => prevState + 60)
        }
    }

    const removeMinute = () => {
        if (props.isWorking && workSeconds > 60) {
            setWorkSeconds(prevState => prevState - 60)
        }
        if (!props.isWorking && breakSeconds > 60) {
            setBreakSeconds(prevState => prevState - 60)
        }
    }

    const changeTimeDisplay = () => {
        let minutes, seconds;

        if (props.isWorking) {
            minutes = Math.floor(workSeconds / 60);
            seconds = workSeconds % 60;
        } else {
            minutes = Math.floor(breakSeconds / 60);
            seconds = breakSeconds % 60;
        }

        if (minutes < 10) {minutes = '0' + minutes}
        if (seconds < 10) {seconds = '0' + seconds}

        return `${minutes} : ${seconds}`
    }

    const displayTime = changeTimeDisplay();

    return (
        <Box sx={{
            marginBottom: '25px'
        }}>
            <FormControl>
                <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group">
                    <FormControlLabel control={<Radio
                        checked={props.isWorking}
                        disabled={props.isCounting}
                        onChange={() => props.changeTimerType(true)}
                    />} label="Work" />
                    <FormControlLabel control={<Radio
                        checked={!props.isWorking}
                        disabled={props.isCounting}
                        onChange={() => props.changeTimerType(false)}
                    />} label="Break" />
                </RadioGroup>
            </FormControl>
            <Box sx={{
                display: "flex",
                justifyContent: 'space-around',
                alignItems: 'center',
                margin: '25px 0'
            }}>
                <Button variant="contained"
                        disabled={props.isCounting}
                        onClick={removeMinute}>
                    <RemoveIcon/>
                </Button>
                <Typography variant="h3" sx={{
                    fontSize: '52px'
                }}>
                    {displayTime}
                </Typography>
                <Button variant="contained"
                        disabled={props.isCounting}
                        onClick={addMinute}>
                    <AddIcon/>
                </Button>
            </Box>
            <ButtonGroup>
                <Button variant="contained"
                        onClick={startTimer}>
                    {props.isCounting ? 'Pause' : 'Start'}
                </Button>
                <Button variant="contained"
                        disabled={props.isCounting}
                        onClick={resetTimer}>
                    Reset
                </Button>
            </ButtonGroup>
        </Box>
    );
};

export default Timer;