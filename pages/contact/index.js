import Head from 'next/head';
import classes from './contact.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>igi iroko | Contact</title>
      </Head>
      <main className={classes.main}>
        <div className={classes.center}>
          <h1>Contact</h1>
        </div>
      </main>
    </>
  );
}
