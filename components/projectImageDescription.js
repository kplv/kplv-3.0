import classes from './projectImageDescription.module.css';

function ImageDescription(props) {

  const {caption} = props

  return <span className={classes.description}>{caption}</span>;
}

export default ImageDescription;
