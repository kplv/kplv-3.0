import classes from './project.module.css';
import Image from 'next/image';
import Link from 'next/link';
import TagList from './tagList';
import tags from '../data/tags.json'

function Project(props) {

  const {header, description} = props;

  
  return (
    <Link href='#'>
      <div className={classes.project}>
        <div className={classes.header}>
          <h2 className={classes.projectName}>{header}</h2>
          <TagList allTags={tags}/>
        </div>

        <div className={classes.body}>
          <div className={classes.text}>
            <p>
              {description}
            </p>
          </div>
          <Image
            src='/preview.png'
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
