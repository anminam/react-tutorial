import React from 'react';
import { useRef } from 'react';
import { useUserMedia } from '../hooks/useUserMedia';

const CAPTURE_OPTIONS = {
    audio: false,
    video: {facingMode: "environment"}
}
const Camera = () => {
    const videoRef = useRef();
    const mediaStream = useUserMedia(CAPTURE_OPTIONS);

    if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
        videoRef.current.srcObject = mediaStream;
    }

    const handleCanPlay = () => {
        videoRef.current.play();
    }

    return(
        <video ref={videoRef} onCanPlay={handleCanPlay} autoPlay playsInline muted />
    )
}

export default Camera;