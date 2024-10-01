import classes from "./bottom-text.module.css";
import texts from "../data/texts.json";
import { motion } from "framer-motion";

function BottomText({ variants }) {
  const item = variants;
  return (
    <motion.p className={classes.text} variants={item}>
      {texts.bottom}
    </motion.p>
  );
}

export default BottomText;
