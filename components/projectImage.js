import classes from './projectImage.module.css';
import Image from 'next/image';
import ImageDescription from './projectImageDescription';

function ProjectImage(props) {
  return (
    <div style={{ position: 'relative' }}>
      <ImageDescription />
      <Image
        src='/image.png'
        width='760px'
        height='474px'
        className={classes.image}
      />
    </div>
  );
}

export default ProjectImage;
