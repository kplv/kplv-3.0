import { Fragment } from 'react';
import classes from './projectImage.module.css';
import Image from 'next/image';
import Spacer from './spacer';
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
