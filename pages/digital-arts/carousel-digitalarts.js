import { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

function CarouselDigitalArts() {
  const [dataResponse, setDataResponse] = useState([]);

  useEffect(() => {
    async function getPageData() {
      const apiUrlEndpoint =
        'http://localhost:3000/api/data-carouseldigitalarts';
      const response = await fetch(apiUrlEndpoint);
      const res = await response.json();
      setDataResponse(res.carouseldigitalarts);
    }
    getPageData();
  }, []);

  return (
    <>
      <h2>BIRD &copy; Graphics</h2>
      <Carousel>
        {dataResponse.map(carousels => {
          return (
            <Carousel.Item key={carousels.id}>
              <Image
                className="d-block w-100"
                src={carousels.image}
                alt={carousels.alt}
              />
              <Carousel.Caption>
                <h5>{carousels.title}</h5>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>{' '}
    </>
  );
}

export default CarouselDigitalArts;