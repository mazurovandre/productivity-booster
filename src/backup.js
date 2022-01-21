import {useEffect, useState} from "react";

const increaseMinutes = () => {
    props.changeMinutes(true)
}

const decreaseMinutes = () => {
    props.changeMinutes(false)
}




const [isCounting, setIsCounting] = useState(false)

const toggleCounting = () => {
    setIsCounting(prevState => !prevState)
}



const [state, setState] = useState({
    workSeconds: initialWorkTime,
    breakSeconds: initialBreakTime,
    isWorkTimer: true,
    isStarted: false
})

const workCountDown = () => {
    if (state.workSeconds === 0) {
        setState(prevState => ({
            ...prevState,
            workSeconds: initialWorkTime,
            isWorkTimer: false
        }))
    } else {
        setState(prevState => ({
            ...prevState,
            workSeconds: prevState.workSeconds - 1
        }))
    }
}

const breakCountDown = () => {
    if (state.breakSeconds === 0) {
        setState(prevState => ({
            ...prevState,
            breakSeconds: initialBreakTime,
            isWorkTimer: true
        }))
    } else {
        setState(prevState => ({
            ...prevState,
            breakSeconds: prevState.breakSeconds - 1
        }))
    }
}

useEffect(() => {
    if(state.isStarted) {
        const timer = setTimeout(() => {
            if (state.isWorkTimer) {
                workCountDown()
            } else {
                breakCountDown()
            }
        }, 1000);

        return () => clearTimeout(timer);
    }
});

const setWorkTimer = () => {
    setState(prevState => ({
        ...prevState,
        isWorkTimer: true
    }))
}

const setBreakTimer = () => {
    setState(prevState => ({
        ...prevState,
        isWorkTimer: false
    }))
}

const toggleTimer = () => {
    setState(prevState => ({
        ...prevState,
        isStarted: !prevState.isStarted
    }))
    if (state.isStarted) {
        if (state.isWorkTimer) {
            workCountDown()
        } else {
            breakCountDown()
        }
    }
}

const resetTimer = () => {
    setState(prevState => ({
        ...prevState,
        workSeconds: initialWorkTime,
        breakSeconds: initialBreakTime,
        isWorkTimer: true,
        isStarted: false
    }))
}

const changeWorkMinutes = (isIncrease) => {
    setState(prevState => {
        if (isIncrease) {
            return {
                ...prevState,
                workSeconds: prevState.workSeconds + 60
            }
        } else {
            if (prevState.workSeconds > 60) {
                return {
                    ...prevState,
                    workSeconds: prevState.workSeconds - 60
                }
            }
        }
        return prevState
    })
}

const changeBreakMinutes = (isIncrease) => {
    setState(prevState => {
        if (isIncrease) {
            return {
                ...prevState,
                breakSeconds: prevState.breakSeconds + 60
            }
        } else {
            if (prevState.breakSeconds >= 60) {
                return {
                    ...prevState,
                    breakSeconds: prevState.breakSeconds - 60
                }
            }
        }
        return prevState
    })
}
