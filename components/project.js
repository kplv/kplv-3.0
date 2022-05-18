import classes from './project.module.css';
import Image from 'next/image';

function Project(props) {
  return (
    <div className={classes.project}>
      <div className={classes.header}>
        <h2 className={classes.projectName}>Arrival customer care</h2>
        <p className={classes.year}>(2022)</p>
      </div>

      <div className={classes.body}>
        <div className={classes.text}>
          <p>
            Leading a full cycle of product design of a service to help
            customers get what they want
          </p>
          <p className={classes.link}>(go to project)</p>
        </div>
        <Image className={classes.pic} src="/preview.png" width='100%' height='100%' layout='responsive'></Image>
      </div>
    </div>
  );
}

export default Project;
