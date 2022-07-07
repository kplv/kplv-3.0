import classes from './projectImage.module.css';
import Image from 'next/image';
import ImageDescription from './projectImageDescription';

function ProjectImage(props) {

  const { src, caption } = props;

  return (
    <div style={{ position: 'relative' }}>
      <ImageDescription caption={caption}/>
      <Image
        src={src}
        width='760px'
        height='474px'
        className={classes.image}
        objectFit="cover"
      />
    </div>
  );
}

export default ProjectImage;
