import { useState, useRef, useEffect } from 'react';
import classes from './projectVideo.module.css';
import ImageDescription from './projectImageDescription';

function ProjectVideo(props) {
  const { src, caption } = props;
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('loadeddata', () => setIsLoaded(true));
    }
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('loadeddata', () => setIsLoaded(true));
      }
    };
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <ImageDescription caption={caption} />
      <div className={`${classes.videoWrapper} ${isLoaded ? '' : classes.skeleton}`}>
        <video
          ref={videoRef}
          className={classes.video}
          src={src}
          autoPlay
          playsInline
          muted
          loop
        />
      </div>
    </div>
  );
}

export default ProjectVideo;

