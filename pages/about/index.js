import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import classes from './About.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      {/* <Head>
        <title>igi iroko | multimedia</title>
        <meta name="description" content="igi iroko | multimedia" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <main className={classes.main}>
        <div className={classes.center}>
          <h1>igi iroko | About</h1>
        </div>
      </main>
    </>
  );
}
