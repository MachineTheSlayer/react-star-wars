import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import cn from "classnames";

import styles from './UiVideo.module.css';

const UiVideo = ({
    src,
    playbackRate=1.0,
    classes
}) => {
    const videoRef = useRef(null);

    useEffect(() => {
        videoRef.current.playbackRate = playbackRate;
    }, []);

    return (
        <video 
            loop
            autoPlay
            muted
            className={cn(styles.video, classes)}
            ref={videoRef}
        >
            <source src={src} />
        </video>
    )
}

UiVideo.propTypes = {
  src: PropTypes.string,
  playbackRate: PropTypes.number,
  classes: PropTypes.string,
};

export default UiVideo;