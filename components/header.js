import Link from "next/link";
import classes from "./header.module.css";
import { motion } from "framer-motion";
import Image from "next/image";

const AnimatedLink = ({ href, children, icon }) => {
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

function Header() {
  return (
    <header className={classes.header}>
      <AnimatedLink href="/">
        Hey 
        <Image
          src="/icons/hand.svg"
          width="24px"
          height="24px"
          priority
          className={classes.icon}
        />
         , I’m Denis Kopylov
      </AnimatedLink>
      <AnimatedLink href="#contacts">Contacts</AnimatedLink>
    </header>
  );
}

export default Header;
