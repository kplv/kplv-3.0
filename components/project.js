import classes from './project.module.css';
import Image from 'next/image';
import Link from 'next/link';
import TagList from './tagList'

function Project(props) {
  return (
    <Link href="#">
      <div className={classes.project}>
        <div className={classes.header}>
          <h2 className={classes.projectName}>Arrival</h2>
          <TagList/>
        </div>

        <div className={classes.body}>
          <div className={classes.text}>
            <p>
              Leading a full cycle of product design of a service to help
              customers get what they want
            </p>
          </div>
          <Image
            src="/preview.png"
            width="364px"
            height="228px"
            objectFit="contain"
            quality="100"
          ></Image>
        </div>
      </div>
    </Link>
  );
}

export default Project;
