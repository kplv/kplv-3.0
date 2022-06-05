import texts from '../data/texts.json'
import classes from './hello-text.module.css';


function HelloText() {
  return (
    <h1 className={classes.text}>
 {texts.about}
    </h1>
  );
}

export default HelloText;
