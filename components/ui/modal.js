import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import classes from './modal.module.scss';
// import Image from 'next/image';
import Image from 'react-bootstrap/Image';

function ModalItems(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="dark" onClick={toggle} className={classes.iconBtn}>
        <Image
          className="d-block w-10"
          src="/images/icons-001/icon-1.gif"
          alt="icons 001"
        />
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>
          <Image
            className="d-block w-10"
            src="/images/icons-001/icon-1.gif"
            alt="icons 001"
          />
          icons title
        </ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <p>A.Lipede</p>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalItems;
