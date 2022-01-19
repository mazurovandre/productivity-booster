import React, {useEffect, useState} from 'react';
import ReactPlayer from 'react-player';
import style from './SoundCloud.module.sass';

const SoundCloud = (props) => {

    const [state, setState] = useState({
        url: 'https://soundcloud.com/user-557907489/sets/work',
        playing: false,
        // height: '166px',
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

    return (
        <ReactPlayer className={style.widget}
                     {...state}
                     onPause={pauseTrack}
                     onPlay={playTrack}
        />
    )
}

export default SoundCloud;