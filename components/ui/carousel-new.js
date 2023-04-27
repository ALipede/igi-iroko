// import classes from '@/styles/home.module.scss';
// import ContainerItem from '@/components/ui/container-item';
// import Carousel from '@/components/ui/carousel';
// import { getHomeCarousel } from './home-data';

// export default function Home() {
//   const homeCarousel = getHomeCarousel();

//   return (
//     <>
//       <main className={classes.main}>
//         <div className={classes.center}>
//           <div>
//             <ContainerItem>
//               <h1>Home</h1>
//               <Carousel items={homeCarousel} />
//               <p>
//                 igi iroko - <em>i.e; Iroko tree in Yorubà language.</em>
//               </p>
//               <p>
//                 The internet is an information highway. It is like an
//                 interactive TV station where everybody can present information
//                 about what they do and where to find them. The internet is a
//                 fast and easy way to communicate, integrate and advertise
//                 imgviews, ideas & concepts of all kinds. Which makes owning a
//                 web site like owning a broadcasting channel. The whole idea is
//                 to make your web site a 24 hour channel for you and your site
//                 visitors.
//               </p>
//               <p>Afọlabi Lipẹdé</p>
//             </ContainerItem>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }

////////////////

import path from 'path';
import fs from 'fs/promises';
import classes from '@/styles/home.module.scss';
// import ContainerItem from '@/components/ui/container-item';
import { Carousel } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
// import CarouselItemNew from '../components/ui/carousel-new';

function CarouselItemNew(props) {
  const { imgviews } = props;

  return (
    <main className={classes.main}>
      <div className={classes.center}>
        <Carousel>
          {imgviews.map(imgviews => (
            <Carousel.Item key={imgviews.id}>
              <Image
                className="d-block w-100"
                src={imgviews.image}
                alt={imgviews.alt}
              />
              <Carousel.Caption>
                <h3>{imgviews.title}</h3>
                <p>{imgviews.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </main>
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

export default CarouselItemNew;
