import React, { useState } from 'react';
// import path from 'path';
// import fs from 'fs/promises';

import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
// import { getContactList } from './contact-data';

// import ContactList from './contact-list';
// const contactList = getContactList();

// import ContactNew from './contact-new';

import ListGroup from 'react-bootstrap/ListGroup';
// import Link from 'next/link';
import classes from './contact.module.scss';
import DownloadCv from './download-cv';

function ContactPage() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const { viewinfo } = props;

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
          {/* <ContactList items={contactList} /> */}

          <ListGroup variant="flush" className={classes.list}>
            {/* {viewinfo.map(info => (
              <ListGroup.Item key={info.id}>
                <Link href={info.href} target={info.target}>
                  <span className={classes.icons}>{info.icon}</span>
                  {info.ref}
                </Link>
              </ListGroup.Item>
            ))} */}

            {/* <ContactNew /> */}

            <ListGroup.Item>
              <DownloadCv />
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

// export async function getStaticProps() {
//   const infoPath = path.join(process, cwd(), 'data', 'data-contact.json');
//   const jsonData = await fs.readFile(infoPath);
//   const data = JSON.parse(jsonData);

//   return {
//     props: {
//       viewinfo: data.viewinfo,
//     },
//   };
// }

export default ContactPage;
