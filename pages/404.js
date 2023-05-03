import Head from 'next/head';
import classes from './404.module.scss';

export default function page404() {
  return (
    <>
      <Head>
        <title>404 - Page not found!</title>
      </Head>
      <main className={classes.main}>
        <div className={classes.center}>
          <h1>404 - Page not found!</h1>
        </div>
      </main>
    </>
  );
}
