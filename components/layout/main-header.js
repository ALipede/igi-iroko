import Link from 'next/link';
import classes from './main-header.module.css';

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">igi iroko | multimedia</Link>
      </div>
      <nav className={classes.navigation}>
        <ul className={classes.list}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/alipede">A.Lipede</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
