import classes from './Footer.module.css';
import FooterLink from './footerLink';


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

function Footer(props) {
  const { items } = props;
  
  return (
    <footer id='contacts'>
      <ul className={classes.footer}>
        {items.map((item) => (
          <FooterLink 
          link = {item.link}
          text={item.text}
          key={item.id}
          src={item.src} />
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
