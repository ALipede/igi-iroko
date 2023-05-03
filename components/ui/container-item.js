import classes from '../../styles/home.module.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ContainerItem(props) {
  return (
    <Container fluid="md" className={classes.padding}>
      <Row>
        <Col lg="8">{props.children}</Col>
      </Row>
    </Container>
  );
}
