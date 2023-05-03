import Head from 'next/head';
import classes from './alipede.module.scss';
import Image from 'react-bootstrap/Image';

import ContainerItem from '../../components/ui/container-item';

export default function AipedePage() {
  return (
    <>
      <Head>
        <title>igi iroko | A.Lipẹdé</title>
      </Head>
      <main className={classes.main}>
        <h1>Afolabi Lipedé</h1>
        <ContainerItem>
          <p>
            Web Developer and UI Designer, Web Graphics and Digital Arts,
            content development, technical specification through to
            implementation, vector shape graphics, web animation and web ad
            banners. Responsive website design and development for all browser
            types including mobile devices. A good understanding of W3C
            standards, browser compatibility, usability and accessibility
            issues.
          </p>
          <Image
            className="d-block w-100"
            src="/images/alipede/alipede-plan.png"
            alt="alipede plan"
            fluid
          />
        </ContainerItem>
      </main>
    </>
  );
}
