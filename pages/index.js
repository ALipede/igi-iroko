import Head from 'next/head';
// import Image from 'next/image';
import { Inter } from 'next/font/google';
import classes from '@/styles/Home.module.css';
// import { Button } from 'reactstrap';
import { Carousel } from 'react-bootstrap';

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
          <h1>igi iroko | multimedia</h1>
          <div>
            {/* <Button type="primary">Primary Button</Button> */}

            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://placehold.it/800x400?text=800x400"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://placehold.it/800x400?text=800x400"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://placehold.it/800x400?text=800x400"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </main>
    </>
  );
}
