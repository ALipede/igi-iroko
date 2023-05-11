import React, { useState } from 'react';
import path from 'path';
import fs from 'fs/promises';
// import classes from './digital-arts.module.scss';
// import ContainerItem from '../../components/ui/container-item';
// import { Carousel } from 'react-bootstrap';
// import Image from 'react-bootstrap/Image';
// import ModalItems from '../../components/ui/modal';

import { Table } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import classes from './icons.module.scss';
import Image from 'react-bootstrap/Image';

function IconsSetOne(props, args) {
  const { icononesets } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <h2 className={classes.heading}>ICONS 001</h2>
      <p>
        Click on icons to <em>view:</em>
      </p>
      <Table responsive className={classes.iconsTable}>
        <tbody>
          <tr>
            {icononesets.map(icononeset => (
              <td scope="row" key={icononeset.id}>
                <Button
                  color="dark"
                  onClick={toggle}
                  className={classes.iconBtn}
                >
                  <Image
                    className="d-block w-10"
                    src={icononeset.iconsrc}
                    alt={icononeset.iconalt}
                  />
                </Button>
                <Modal isOpen={modal} toggle={toggle} {...args}>
                  <ModalHeader toggle={toggle}>
                    <Image
                      className="d-block w-10"
                      src={icononeset.iconsrc}
                      alt={icononeset.iconalt}
                    />
                    icons title
                  </ModalHeader>
                  <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </ModalBody>
                  <ModalFooter>
                    <p>A.Lipede</p>
                  </ModalFooter>
                </Modal>
              </td>
            ))}
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'data-icons-set.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      icononesets: data.icononesets,
    },
  };
}

export default IconsSetOne;
