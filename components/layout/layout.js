import { Fragment } from 'react';
import MainHeader from './main-header';
import Footer from './footer';
import Container from 'react-bootstrap/Container';
import classes from './layout.module.scss';

function Layout(props) {
  return (
    <Fragment>
      <MainHeader />
      <Container fixed>
        <main className={classes.main}>{props.children}</main>
      </Container>
      <Footer />
    </Fragment>
  );
}
export default Layout;
