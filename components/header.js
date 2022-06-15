import Link from 'next/link';
import classes from './header.module.css';

function Header() {
  return (
    <header className={classes.header}>
      <Link href='/'>
        <a className={classes.link}>Denis Kopylov</a>
      </Link>
      <Link href='#contacts'>
        <a className={classes.link}>Contacts</a>
      </Link>
    </header>
  );
}

export default Header;
