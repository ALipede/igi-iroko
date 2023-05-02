import Head from 'next/head';
import classes from './web-development.module.scss';
import WebDevelopment from './web-development';

export default function Home() {
  return (
    <>
      <Head>
        <title>igi iroko | Web Development</title>
      </Head>
      <main className={classes.main}>
        <div className={classes.center}>
          <h1>Web Development</h1>
          <p>Page under contruction.</p>
          <WebDevelopment />
        </div>
      </main>
    </>
  );
}
