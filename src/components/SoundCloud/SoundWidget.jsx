import React, {useState} from 'react';
import ReactPlayer from 'react-player';
import style from './SoundWidget.module.sass';

const SoundWidget = () => {

    const [state, setState] = useState({
        url: 'https://soundcloud.com/user-557907489/sets/work',
        playing: false,
        height: '166px'
    })

    const pauseTrack = () => { setState({...state, playing: false}) }
    const playTrack = () => { setState({...state, playing: true}) }

    return (
        <ReactPlayer className={style.widget}
            {...state}
            onPause={pauseTrack}
            onPlay={playTrack}
        />
    )
}

export default SoundWidget;