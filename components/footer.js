import classes from "./Footer.module.css";
import FooterLink from "./footerLink";
import { motion } from "framer-motion";

const AnimatedLink = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <motion.a
        className={classes.link}
        whileHover={{ opacity: 0.5 }}
        whileTap={{ scale: 0.95 }}
        transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
      >
        {children}
      </motion.a>
    </Link>
  );
};

function Footer(props) {
  const { items } = props;
  const item = props.variants;

  return (
    <motion.footer id="contacts" variants={item}>
      <ul className={classes.footer}>
        {items.map((item) => (
          <FooterLink
            link={item.link}
            text={item.text}
            key={item.id}
            src={item.src}
          />
        ))}
      </ul>
    </motion.footer>
  );
}

export default Footer;
