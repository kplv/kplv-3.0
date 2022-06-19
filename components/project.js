import classes from './project.module.css';
import Image from 'next/image';
import Link from 'next/link';
import TagList from './tagList';
import tags from '../data/tags.json';

function Project(props) {
  const { description, image, id, projectTags} = props;
  const link = `/${id}`;
  

  return (
    <Link href={link}>
      <div className={classes.project}>
        <div className={classes.header}>
          <h2 className={classes.projectName}>{id}</h2>
          <TagList projectTags={projectTags} />
        </div>

        <div className={classes.body}>
          <div className={classes.text}>
            <p>{description}</p>
          </div>
          <Image
            src={image}
            width='364px'
            height='228px'
            objectFit='contain'
            quality='100'
          ></Image>
        </div>
      </div>
    </Link>
  );
}

export default Project;
