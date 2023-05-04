import Head from 'next/head';
import path from 'path';
import fs from 'fs/promises';
import classes from '../styles/home.module.scss';
import ContainerItem from '../components/ui/container-item';
import { Carousel } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

function Home(props) {
  const { imgviews } = props;

  return (
    <>
      <Head>
        <title>igi iroko | Home</title>
      </Head>
      <main className={classes.main}>
        <h1>Home</h1>
        <ContainerItem>
          <Carousel>
            {imgviews.map(imgview => (
              <Carousel.Item key={imgview.id}>
                <Image
                  className="d-block w-100"
                  src={imgview.image}
                  alt={imgview.alt}
                />
                <Carousel.Caption>
                  <h3>{imgview.title}</h3>
                  <p>{imgview.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>

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

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'data-home.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      imgviews: data.imgviews,
    },
  };
}

export default Home;
