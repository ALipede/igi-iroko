import Head from 'next/head';
import path from 'path';
import fs from 'fs/promises';
import classes from './digital-arts.module.scss';
import ContainerItem from '../../components/ui/container-item';
import { Carousel } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

function DigitalArtsPage(props) {
  const { imgviews } = props;

  return (
    <>
      <Head>
        <title>igi iroko | Digital Arts</title>
      </Head>

      <main className={classes.main}>
        <h1>Digital Arts</h1>
        <ContainerItem>
          <p>Page under construction.</p>
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
        </ContainerItem>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'data-digital-arts.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      imgviews: data.imgviews,
    },
  };
}

export default DigitalArtsPage;
