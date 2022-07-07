import classes from './tag.module.css';
import Image from 'next/image';

function Tag(props) {
  const { backColor, text, textColor, isIcon, path } = props;
  // console.log(props);

  if (isIcon) {
    return (
      <span
        className={classes.tag}
        style={{ backgroundColor: backColor, color: textColor }}
      >
        <Image src={path} width='16px' height='16px' />

        {text}
      </span>
    );
  } else {
    return (
      <span
        className={classes.tag}
        style={{ backgroundColor: backColor, color: textColor }}
      >
        {text}
      </span>
    );
  }
}

export default Tag;
