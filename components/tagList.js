import Tag from './tag';
import classes from './tagList.module.css';

const color = 'rgba(200, 255, 10, 0.1)'
const tagName = 'e-vehicles'
const isIcon = true;

function TagList() {
  return (
    <div className={classes.list}>
      <Tag text={tagName} backColor={color} textColor='#FF6B39'/>
    </div>
  );
}

export default TagList;
