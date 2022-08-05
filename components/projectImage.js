import classes from "./projectImage.module.css";
import Image from "next/image";
import ImageDescription from "./projectImageDescription";

function ProjectImage(props) {
  const { src, caption, fit } = props;
  console.log(fit)
  let objectFit;
  if (!fit) {
    objectFit = "cover";
  } else {
    objectFit = fit;
  }

  return (
    <div style={{ position: "relative" }}>
      <ImageDescription caption={caption} />
      <Image
        src={src}
        width="760px"
        height="474px"
        className={classes.image}
        objectFit={objectFit}
      />
    </div>
  );
}

export default ProjectImage;
