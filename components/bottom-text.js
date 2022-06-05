import classes from './bottom-text.module.css'
import texts from '../data/texts.json'


function BottomText() {
 return <p className={classes.text}>{texts.bottom}</p>
}

export default BottomText

