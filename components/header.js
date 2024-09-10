import Link from 'next/link';
import classes from './header.module.css';
import { motion } from 'framer-motion';

const AnimatedLink = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <motion.a
        className={classes.link}
        whileHover={{ opacity: .5 }}
        whileTap={{ scale: .95 }}
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
      <AnimatedLink href="/">Denis Kopylov</AnimatedLink>
      <AnimatedLink href="#contacts">Contacts</AnimatedLink>
    </header>
  );
}

export default Header;