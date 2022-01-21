import React, {useEffect, useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import '../../Style.scss'
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

const Timer = (props) => {

    // const initialWorkTime = 1500;
    // const initialBreakTime = 300;

    const [workSeconds, setWorkSeconds] = useState(1500);
    const [breakSeconds, setBreakSeconds] = useState(300);




    const workCountDown = () => {
        setWorkSeconds(prevState => prevState - 1)
    }

    const breakCountDown = () => {
        setBreakSeconds(prevState => prevState - 1)
    }

    const changeTimeDisplay = () => {

        let minutes = 20;
        let seconds = 0;

        if (props.isWorking) {
            minutes = Math.floor(workSeconds / 60);
            seconds = workSeconds % 60;
        } else {
            minutes = Math.floor(breakSeconds / 60);
            seconds = breakSeconds % 60;
        }

        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        return `${minutes} : ${seconds}`

    }

    const displayTime = changeTimeDisplay();


    useEffect(() => {




        if(props.isCounting) {
            const timer = setTimeout(() => {
                props.isWorking ? workCountDown() : breakCountDown();
            }, 1000);
            return () => clearTimeout(timer);
        }
    });

    const startTimer = () => {
        props.toggleIsCounting()
    }



    // const setBreakTimer = () => {
    //     setState(prevState => ({
    //         ...prevState,
    //         isWorkTimer: false
    //     }))
    // }

    return (
        <div>
            <div>
                <FormControl>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                    >
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
            </div>
            <div className="timer">
                <Button variant="contained"><RemoveIcon/></Button>
                <h3>
                    {displayTime}
                </h3>
                <Button variant="contained"><AddIcon/></Button>
            </div>
            <ButtonGroup>
                <Button variant="contained"
                        onClick={startTimer}>
                    {props.isCounting ? 'Pause' : 'Start'}
                </Button>
                <Button variant="contained">Reset</Button>
            </ButtonGroup>

        </div>
    );
};

export default Timer;