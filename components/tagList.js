import Tag from './tag';
import classes from './tagList.module.css';
import tags from '../data/tags.json';

console.log(tags);

const color = 'rgba(200, 255, 10, 0.1)';
const tagName = 'e-vehicles';
const isIcon = true;

function TagList() {
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
