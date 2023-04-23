import { Fragment } from 'react';
import MainHeader from './main-header';
import Footer from './footer';
import Container from 'react-bootstrap/Container';

function Layout(props) {
  return (
    <Fragment>
      <MainHeader />
      <Container fixed>
        <main>{props.children}</main>
      </Container>
      <Footer />
    </Fragment>
  );
}
export default Layout;
