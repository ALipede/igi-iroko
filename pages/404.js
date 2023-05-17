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
          <hr />
          <p>
            It looks like you have reached a URL that does not exit. Please use
            the navigation above and below to find your way back to the website.
          </p>
        </div>
      </main>
    </>
  );
}
