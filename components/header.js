import Link from 'next/link';
import classes from './header.module.css';

function Header() {
  return (
    <header className={classes.header}>
      <a className={classes.link} href='/'>
        Denis Kopylov
      </a>

      <a className={classes.link} href='#contacts'>
        Contacts
      </a>
    </header>
  );
}

export default Header;
