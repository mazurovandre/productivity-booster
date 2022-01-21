import React, {useEffect, useState} from 'react';
import ReactPlayer from 'react-player';
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Switch from "@mui/material/Switch";

const SoundCloud = (props) => {

    const [isShownPlugin, setIsShownPlugin] = useState(false);
    const [isPlayingMusic, setIsPlayingMusic] = useState(true);
    const [pluginState, setPluginState] = useState({
        url: 'https://soundcloud.com/user-557907489/sets/work',
        playing: false,
        width: '100%'
    })

    const pauseTrack = () => {
        setPluginState(prevState => ({...prevState, playing: false}))
    }
    const playTrack = () => {
        setPluginState(prevState => ({...prevState, playing: true}))
    }

    useEffect(() => {
        setPluginState(prevState => ({
            ...prevState,
            playing: props.isPlaying && isPlayingMusic
        }))
        console.log()
    }, [props.isPlaying, isPlayingMusic])



    const toggleShownPlugin = () => {
        setIsShownPlugin((prev) => !prev);
    };

    const togglePlayingMusic = () => {
        setIsPlayingMusic((prev) => !prev);
    };

    return (
        <div>
            <Box sx={{ minWidth: "325px", mx: 'auto', textAlign: 'left' }}>
                <FormControlLabel
                    control={<Switch checked={isPlayingMusic} onChange={togglePlayingMusic} />}
                    label="Playing Music"
                />
            </Box>
            <Box sx={{ minWidth: "325px", mx: 'auto', textAlign: 'left' }}>
                <FormControlLabel
                    control={<Switch checked={isShownPlugin} onChange={toggleShownPlugin} />}
                    label="Show SoundCloud Plugin"
                />
                <Box>
                    <div>
                        <Collapse in={isShownPlugin}
                                  addEndListener={() => {}}>
                            <ReactPlayer id='dropdown'
                                         className="soundcloud__widget"
                                         {...pluginState}
                                         onPause={pauseTrack}
                                         onPlay={playTrack}
                            />
                        </Collapse>
                    </div>
                </Box>
            </Box>
        </div>
    )
}

export default SoundCloud;