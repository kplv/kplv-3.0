import classes from './project.module.css';
import Image from 'next/image';
import Link from 'next/link';
import TagList from './tagList';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { isMobile } from 'react-device-detect';

let variants = {};
let intialOpacity;

if (!isMobile) {
  intialOpacity = 0;
  variants = {
    open: { opacity: 1, transition: { duration: 0.3, type: 'ease' } },
    closed: {
      opacity: 0,
      y: 24,
      transition: { duration: 0.3, type: 'ease' },
    },
  };
} else {
  intialOpacity = 1;
}

function Project(props) {
  const [isHovered, setIsHovered] = useState(false);
  const { description, image, id, projectTags, name, nda } = props;
  let link;
  let projectClass;
  let scrollAfterClick;

  if (!nda) {
    link = `/${id}`;
    projectClass = '';
  } else {
    link = [];
    projectClass = classes.locked;
    scrollAfterClick = false;
  }

  return (
    <motion.div
      whileHover={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Link href={link} scroll={scrollAfterClick}>
        <div className={classes.project + ' ' + projectClass}>
          <div className={classes.header}>
            <h2 className={classes.projectName}>{name}</h2>
          </div>

          <div className={classes.body}>
            <div className={classes.description}>
              <TagList projectTags={projectTags} />
              <h2 className={classes.projectText}>{description}</h2>
            </div>
            <motion.div
              variants={variants}
              animate={isHovered ? 'open' : 'closed'}
              initial={{ opacity: { intialOpacity } }}
            >
              <Image
                src={image}
                width='364px'
                height='228px'
                objectFit='contain'
                quality='100'
                priority
                eager
              ></Image>
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default Project;
