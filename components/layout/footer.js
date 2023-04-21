import Link from 'next/link';
import classes from './footer.module.css';

function Footer() {
  return (
    <footer className={classes.footer}>
      <ul>
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
    </footer>
  );
}

export default Footer;
