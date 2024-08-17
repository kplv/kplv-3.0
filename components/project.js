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

  // New code

const [isClicked, setIsClicked] = useState(false); // Add this line

const jiggleVariants = {
  initial: { rotate: 0 }, // Initial state, no rotation
  jiggle: { 
    rotate: [0, 2, -2, 2, -2, 0], // Keyframes for the jiggle effect
    transition: { duration: 0.35 } // Jiggle lasts 0.5 seconds
  },
};

const handleClick = () => {
  if (nda) {
    console.log('Project clicked, triggering jiggle'); // Add this line for debugging
    setIsClicked(true); // Set clicked state to true to trigger animation
    setTimeout(() => setIsClicked(false), 500); // Reset clicked state after 0.5 seconds
  }
};

// New code end

  let projectClass;
  let link = `/${id}`;

  if (!nda) {
    return (
      <motion.div
      whileHover={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      >
        <Link href={link}>
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
  } else {
    return (
      <motion.div
        whileHover={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={handleClick} // Add this line to handle click events
        animate={isClicked ? 'jiggle' : 'initial'} // Add this line to trigger the jiggle animation
        variants={jiggleVariants} // Add this line to define the animation variants
      >
        <div className={classes.project + ' ' + classes.locked}>
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
      </motion.div>
    );
  }
}

export default Project;
