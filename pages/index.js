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
        <h1>Home</h1>
        <ContainerItem>
          <CarouselHome />
          <h2>Welcome igi-iroko.com :</h2>
          <p>
            igi iroko - <em>i.e; Iroko tree in Yorubà language.</em>
          </p>
          <p>
            <strong>
              Tech-savvy and competent professional with diversified experience
              in frontend development coupled with 15+ years of expertise in
              building pixel-perfect and corporate websites.
            </strong>
          </p>
          <p>
            Proficient in complete design and architecture of websites / web
            applications, effectively building web facing elements of user
            generated content platform. Proven adeptness with various
            technologies; desktop and mobile for client and server side, using
            creativity to identify areas of improvement and produce high-quality
            code. Possess in-depth knowledge of server-side scripting languages,
            PhotoShop and Illustrator patterns, Web content, graphics and media
            presentation, W3C standards, and browser compatibility issues.
            Well-prepared to work with large, start-up companies and create
            attractive content-rich websites in highlydemanding environments.
            Equipped with strong analytical and problem-solving skills.
          </p>
          <p>
            <strong>Afọlabi Lipẹdé</strong> <br />
            <em>
              <small>Frontend Web Developer | Web Designer</small>
            </em>
          </p>
        </ContainerItem>
      </main>
    </>
  );
}

export default Home;
