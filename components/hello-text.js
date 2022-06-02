import { helloTextData } from '../data/textData';
import classes from './hello-text.module.css';


function HelloText() {
  return (
    <h1 className={classes.text}>
 {helloTextData}
    </h1>
  );
}

export default HelloText;
