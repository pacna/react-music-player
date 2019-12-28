import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
 
export const ReactAudioPlayer = props => {
    const { src } = props;
    
    return(
        <div style={{position:"fixed", bottom: "0", width: "100%"}}>
            <AudioPlayer
                autoPlay
                loop={true}
                src={src}
                onPlay={e => console.log("onPlay")}
              // other props here
            />
        </div>
    )
}