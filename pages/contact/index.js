import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import ListGroup from 'react-bootstrap/ListGroup';
import classes from './contact.module.scss';

import ContactList from './contactlist';
import DownloadCv from './download-cv';

function ContactPage() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Nav.Link variant="primary" onClick={handleShow}>
        Contact
      </Nav.Link>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h1>Contact</h1>
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <ListGroup variant="flush" className={classes.list}>
            <ContactList />

            <ListGroup.Item>
              <DownloadCv />
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ContactPage;
