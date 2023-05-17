import Head from 'next/head';
import classes from './digital-arts.module.scss';
import ContainerItem from '../../components/ui/container-item';
import ListGroup from 'react-bootstrap/ListGroup';

import CarouselDigitalArts from './carousel-digitalarts';
import IconsScrollSet from './icons-scroll';
import BirdSketchbook from './bird-sketchbook';
import BirdVanAnimation from './animation';

function DigitalArtsPage() {
  return (
    <>
      <Head>
        <title>igi iroko | Digital Arts</title>
      </Head>

      <h1>Digital Arts</h1>
      <ContainerItem>
        <BirdVanAnimation />

        <ListGroup variant="flush">
          <ListGroup.Item>
            <p>
              Adobe Illustrator & PhotoShop - freehand sketchbook illustration,
              vector graphics & gif animation.
            </p>
          </ListGroup.Item>
          <ListGroup.Item>
            <BirdSketchbook />
          </ListGroup.Item>
          <IconsScrollSet />
          <ListGroup.Item>
            <CarouselDigitalArts />
          </ListGroup.Item>
        </ListGroup>
        <p>
          <small>
            <em>Artwork copyrights &copy; Afolabi Lipede</em>
          </small>
        </p>
      </ContainerItem>
    </>
  );
}

export default DigitalArtsPage;
