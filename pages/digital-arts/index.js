import Head from 'next/head';
import classes from './digital-arts.module.scss';
import ContainerItem from '@/components/ui/container-item';
import Carousel from '@/components/ui/carousel';
import { getDigitalArtsCarousel } from './digital-arts-data';

export default function DigitalArts() {
  const digitalArtsCarousel = getDigitalArtsCarousel();

  return (
    <>
      <Head>
        <title>igi iroko | Digital Arts</title>
      </Head>
      <main className={classes.main}>
        <div className={classes.center}>
          <div>
            <ContainerItem>
              <h1>Digital Arts</h1>
              <Carousel items={digitalArtsCarousel} />
              <p>
                The internet is an information highway. It is like an
                interactive TV station where everybody can present information
                about what they do and where to find them. The internet is a
                fast and easy way to communicate, integrate and advertise
                products, ideas & concepts of all kinds. Which makes owning a
                web site like owning a broadcasting channel. The whole idea is
                to make your web site a 24 hour channel for you and your site
                visitors.
              </p>
            </ContainerItem>
          </div>
        </div>
      </main>
    </>
  );
}
