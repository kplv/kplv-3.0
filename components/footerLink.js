import Link from 'next/link';
import Image from 'next/image';
import classes from './footerLink.module.css'

function FooterLink(props) {
  const { id, text, link, src } = props;

  return (
    <Link href={link}>
      <li>
        <Image src="/social/mail.svg" width="28px" height="28px"></Image>
        {text}
      </li>
    </Link>
  );
}

export default FooterLink;
