import classes from './Footer.module.css';
import FooterLink from './footerLink';

function Footer(props) {
  const { items } = props;
  
  return (
    <footer>
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
