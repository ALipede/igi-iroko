// import Head from 'next/head';
// import classes from './digital-arts.module.scss';
// import ContainerItem from '@/components/ui/container-item';
// import Carousel from '@/components/ui/carousel';
// import { getDigitalArtsCarousel } from './digital-arts-data';

// export default function DigitalArts() {
//   const digitalArtsCarousel = getDigitalArtsCarousel();

//   return (
//     <>
//       <Head>
//         <title>igi iroko | Digital Arts</title>
//       </Head>
//       <main className={classes.main}>
//         <div className={classes.center}>
//           <div>
//             <ContainerItem>
//               <h1>Digital Arts</h1>
//               <Carousel items={digitalArtsCarousel} />
//               <p>
//                 The internet is an information highway. It is like an
//                 interactive TV station where everybody can present information
//                 about what they do and where to find them. The internet is a
//                 fast and easy way to communicate, integrate and advertise
//                 products, ideas & concepts of all kinds. Which makes owning a
//                 web site like owning a broadcasting channel. The whole idea is
//                 to make your web site a 24 hour channel for you and your site
//                 visitors.
//               </p>
//             </ContainerItem>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }

import Head from 'next/head';
import path from 'path';
import fs from 'fs/promises';
import classes from '@/styles/home.module.scss';
import ContainerItem from '@/components/ui/container-item';
import { Carousel } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

function DigitalArts(props) {
  const { imgviews } = props;

  return (
    <>
      <Head>
        <title>igi iroko | Digital Arts</title>
      </Head>

      <main className={classes.main}>
        <div className={classes.center}>
          <ContainerItem>
            <h1>Digital Arts</h1>

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
            <p>Page under construction.</p>
          </ContainerItem>
        </div>
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

export default DigitalArts;
