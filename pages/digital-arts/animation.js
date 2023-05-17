import Image from 'react-bootstrap/Image';
import classes from './digital-arts.module.scss';

export default function BirdVanAnimation() {
  return (
    <>
      <div className={classes.imgBorder}>
        <Image
          className="d-block w-100"
          src="/images/digital-arts/animation/animation.gif"
          alt="gif animation"
          fluid
        />
      </div>
    </>
  );
}
