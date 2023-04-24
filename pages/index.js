import classes from '@/styles/home.module.scss';
import ContainerItem from '@/components/ui/container-item';
import Carousel from '@/components/ui/carousel';
import { getHomeCarousel } from './home-data';

export default function Home() {
  const homeCarousel = getHomeCarousel();

  return (
    <>
      <main className={classes.main}>
        <div className={classes.center}>
          <div>
            <ContainerItem>
              <h1>Home</h1>
              <Carousel items={homeCarousel} />
              <p>
                igi iroko - <em>i.e; Iroko tree in Yorubà language.</em>
              </p>
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
              <p>Afọlabi Lipẹdé</p>
            </ContainerItem>
          </div>
        </div>
      </main>
    </>
  );
}
