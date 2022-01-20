import React, {useEffect, useState} from 'react';
import ReactPlayer from 'react-player';
import style from './SoundCloud.module.sass';
import LeftOutlined from "@ant-design/icons/lib/icons/LeftOutlined";

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

    const toggleWidget = (e) => {
        e.target.closest('#dropdown').classList.toggle(style.active)
    }

    return (
        <div id='dropdown' className={style.dropdown}>
            <div className={style.title} onClick={toggleWidget}>
                SoundCloud Music
                <LeftOutlined className={style.icon}/>
            </div>
            <ReactPlayer className={style.widget}
                         {...state}
                         onPause={pauseTrack}
                         onPlay={playTrack}
            />
        </div>

    )
}

export default SoundCloud;