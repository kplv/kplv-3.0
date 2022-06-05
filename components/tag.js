import classes from './tag.module.css';

function Tag(props) {
  const { backColor, text,textColor, isIcon } = props;
  // console.log(props);

  if (isIcon) {
    return (
      <span className={classes.tag} style={{ backgroundColor: backColor, color: textColor }}>
        <svg
          width='16'
          height='16'
          viewBox='0 0 16 17'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M3 10.875L9.62357 3L8.84833 9.125H14L6.67976 17L8.15167 10.875H3Z'
            fill='#A273FE'
          />
        </svg>

        {text}
      </span>
    );
  } else {
    return (
      <span className={classes.tag} style={{ backgroundColor: backColor, color: textColor }}>
        {text}
      </span>
    );
  }
}

export default Tag;
