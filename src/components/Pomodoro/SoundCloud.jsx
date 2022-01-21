import React, {useEffect, useState} from 'react';
import ReactPlayer from 'react-player';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import Button from "@mui/material/Button";

const SoundCloud = (props) => {

    const [state, setState] = useState({
        url: 'https://soundcloud.com/user-557907489/sets/work',
        playing: false,
        width: '100%'
    })

    const pauseTrack = () => {
        setState({...state, playing: false})
    }
    const playTrack = () => {
        setState({...state, playing: true})
    }

    useEffect(() => {
        setState(prevState => ({
            ...prevState,
            playing: props.isPlaying
        }))
    }, [props.isPlaying])

    const toggleWidget = (e) => {
        e.target.closest('#dropdown').classList.toggle("active");
    }

    return (
        <div className="soundcloud">
            <Button variant="contained" className="soundcloud__title" onClick={toggleWidget}>
                SoundCloud Music
                <ChevronLeftOutlinedIcon className="soundcloud__icon"/>
            </Button>
            <ReactPlayer id='dropdown'
                         className="soundcloud__widget"
                         {...state}
                         onPause={pauseTrack}
                         onPlay={playTrack}
            />
        </div>
    )
}

export default SoundCloud;