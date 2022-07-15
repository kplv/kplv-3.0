import Link from 'next/link';
import Image from 'next/image';
import classes from './footerLink.module.css'

function FooterLink(props) {
  const { id, text, link, src } = props;

  return (
    <a href={link} target='_blank' >
      <li className={classes.link}>
        <Image src={src} width="28px" height="28px"></Image>
        {text}
      </li>
    </a>
  );
}

export default FooterLink;
