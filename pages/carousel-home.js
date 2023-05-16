import { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

function CarouselHome() {
  const [dataResponse, setDataResponse] = useState([]);

  useEffect(() => {
    async function getPageData() {
      const apiUrlEndpoint = 'http://localhost:3000/api/data-carouselhome';
      const response = await fetch(apiUrlEndpoint);
      const res = await response.json();
      setDataResponse(res.carouselhome);
    }
    getPageData();
  }, []);

  return (
    <>
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
                {/* <h3>{carousels.title}</h3> */}
                <p>{carousels.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}

export default CarouselHome;
