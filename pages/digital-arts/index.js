import Head from 'next/head';
import classes from './digital-arts.module.scss';
import ContainerItem from '../../components/ui/container-item';

import CarouselDigitalArts from './carousel-digitalarts';
import IconsSetOne from './icons-set-one';
import IconsSetMob from './icons-set-mob';
import IconsSetTwo from './icons-set-two';

function DigitalArtsPage(props) {
  return (
    <>
      <Head>
        <title>igi iroko | Digital Arts</title>
      </Head>
      <main className={classes.main}>
        <h1>Digital Arts</h1>
        <ContainerItem>
          <CarouselDigitalArts />

          <p>Page under construction.</p>

          <IconsSetOne />
          <IconsSetMob />
          <IconsSetTwo />
        </ContainerItem>
      </main>
    </>
  );
}

export default DigitalArtsPage;
