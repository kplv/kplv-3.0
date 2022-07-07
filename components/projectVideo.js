import classes from './projectVideo.module.css';
import ImageDescription from './projectImageDescription';

function ProjectVideo(props) {
  const { src, caption } = props;

  return (
    <div style={{ position: 'relative' }}>
      <ImageDescription caption={caption} />
      <video
        class={classes.video}
        src={src}
        autoplay='yes'
        frameborder='0'
        allowfullscreen=''
        height='100%'
        width='100%'
        muted='true'
        playsinline='true'
        loop='true'
      ></video>
    </div>
  );
}

export default ProjectVideo;

