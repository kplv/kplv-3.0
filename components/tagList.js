import Tag from './tag';
import classes from './tagList.module.css';
import tags from '../data/tags.json';

function TagList(props) {
  const { allTags } = props;

  // console.log(allTags)

  return (
    <div className={classes.list}>
      <Tag
        text={tags['e-vehicles'].text}
        backColor={tags['e-vehicles'].backColor}
        textColor={tags['e-vehicles'].textColor}
        isIcon={tags['e-vehicles'].isIcon}
      />
      <Tag
        text={tags.startup.text}
        backColor={tags.startup.backColor}
        textColor={tags.startup.textColor}
      />
    </div>
  );
}

export default TagList;
