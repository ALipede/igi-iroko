import Head from 'next/head';
import classes from '../styles/home.module.scss';
import ContainerItem from '../components/ui/container-item';

import CarouselHome from './carousel-home';

function Home() {
  return (
    <>
      <Head>
        <title>igi iroko | Home</title>
      </Head>
      <main className={classes.main}>
        <h1>Home 004</h1>
        <ContainerItem>
          <CarouselHome />
          <p>
            igi iroko - <em>i.e; Iroko tree in Yorubà language.</em>
          </p>
          <p>
            The internet is an information highway. It is like an interactive TV
            station where everybody can present information about what they do
            and where to find them. The internet is a fast and easy way to
            communicate, integrate and advertise imgviews, ideas & concepts of
            all kinds. Which makes owning a web site like owning a broadcasting
            channel. The whole idea is to make your web site a 24 hour channel
            for you and your site visitors.
          </p>
          <p>Afọlabi Lipẹdé</p>
        </ContainerItem>
      </main>
    </>
  );
}

export default Home;
