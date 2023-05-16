import ListGroup from 'react-bootstrap/ListGroup';
import classes from './web-development.module.scss';
import { SiAdobexd, SiFigma, SiAffinity, SiSketch } from 'react-icons/si';

function UiDesigns() {
  return (
    <ListGroup variant="flush">
      <ListGroup.Item>
        <span className={classes.applink}>
          <SiAdobexd />
        </span>{' '}
        Adobe XD
      </ListGroup.Item>
      <ListGroup.Item>
        <span className={classes.applink}>
          <SiFigma />
        </span>{' '}
        Figma
      </ListGroup.Item>
      <ListGroup.Item>
        <span className={classes.applink}>
          <SiAffinity />
        </span>
        Affinity Designer
      </ListGroup.Item>
      <ListGroup.Item>
        <span className={classes.applink}>
          <SiSketch />
        </span>{' '}
        Sketch
      </ListGroup.Item>
    </ListGroup>
  );
}

export default UiDesigns;
