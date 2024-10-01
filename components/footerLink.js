import Link from 'next/link';
import Image from 'next/image';
import classes from './footerLink.module.css'
import { motion } from 'framer-motion';


const FooterLink = ( props ) => {
  const { id, text, link, src } = props;
  return (
    <Link href={link} passHref>
 <motion.a
        className={classes.link}
        whileHover={{ opacity: .5 }}
        whileTap={{ scale: .95 }}
        transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
      >
             <li className={classes.link}> 
        <Image src={src} width="28px" height="28px"></Image>
        {text} 
        </li>
      </motion.a>
    </Link>
  );
};

{/* function FooterLink(props) {
  const { id, text, link, src } = props;
  return (
    <a href={link} target='_blank' >
      <li className={classes.link}> 
        <Image src={src} width="28px" height="28px"></Image>
        {text}
      </li>
    </a>
    
  );
} */}

export default FooterLink;
