import Tag from './tag';
import classes from './tagList.module.css'

function TagList() {
  return (
    <div className={classes.list}>
      <Tag />
      <Tag />
      <Tag />
    </div>
  );
}

export default TagList;
