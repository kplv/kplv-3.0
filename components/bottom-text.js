import classes from './bottom-text.module.css'
import { bottomText } from '../textData';



function BottomText() {
 return <p className={classes.text}>{bottomText}</p>
}

export default BottomText

