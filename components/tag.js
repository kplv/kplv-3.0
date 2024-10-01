import classes from "./tag.module.css";
import Image from "next/image";

export default function Tag(props) {
  const { text, path } = props;

  return (
    <span className={classes.tag}>
      <Image src={path} width="20px" height="20px" priority fill="green"/>

      {text}
    </span>
  );
}
