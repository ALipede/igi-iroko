import Head from 'next/head';
import classes from './web-development.module.scss';
import ContainerItem from '@/components/ui/container-item';
import WebDevelopment from './web-development';

export default function Home() {
  return (
    <>
      <Head>
        <title>igi iroko | Web Development</title>
      </Head>
      <main className={classes.main}>
        <h1>Web Development</h1>
        <ContainerItem>
          <p>Page under contruction.</p>
          <WebDevelopment />
        </ContainerItem>
      </main>
    </>
  );
}
