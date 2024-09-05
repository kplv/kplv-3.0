import { useState } from "react";
import classes from "./projectImage.module.css";
import Image from "next/image";
import ImageDescription from "./projectImageDescription";

function ProjectImage(props) {
  const { src, caption, fit } = props;
  const [isLoaded, setIsLoaded] = useState(false);

  const objectFit = fit || "cover";

  return (
    <div style={{ position: "relative" }}>
      <ImageDescription caption={caption} />
      <div className={`${classes.imageWrapper} ${isLoaded ? '' : classes.skeleton}`}>
        <Image
          src={src}
          width="760"
          height="474"
          className={classes.image}
          objectFit={objectFit}
          onLoadingComplete={() => setIsLoaded(true)}
        />
      </div>
    </div>
  );
}

export default ProjectImage;
