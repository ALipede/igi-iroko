import { Carousel } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

export default function CarouselItem(props) {
  const { items } = props;
  return (
    <Carousel>
      {items.map(views => (
        <Carousel.Item key={views.id}>
          <Image className="d-block w-100" src={views.image} alt={views.alt} />
          <Carousel.Caption>
            <h3>{views.title}</h3>
            <p>{views.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
