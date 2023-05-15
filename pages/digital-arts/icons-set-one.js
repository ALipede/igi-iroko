import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import classes from './digital-arts.module.scss';
import Image from 'react-bootstrap/Image';

function IconsSetOne(args) {
  // const [modal, setModal] = useState(false);
  // const toggle = () => setModal(!modal);

  const [dataResponse, setDataResponse] = useState([]);

  useEffect(() => {
    async function getPageData() {
      const apiUrlEndpoint = 'http://localhost:3000/api/data-iconsone';
      const response = await fetch(apiUrlEndpoint);
      const res = await response.json();
      setDataResponse(res.icononesets);
    }
    getPageData();
  }, []);

  return (
    <>
      <h2>ICONS 001</h2>
      <p>
        Click on icons to <em>view:</em>
      </p>
      <Table responsive className={classes.iconsTable}>
        <tbody>
          <tr>
            {dataResponse.map(icononeset => {
              return (
                <>
                  <td scope="row" key={icononeset.id}>
                    <Image
                      className="d-block w-10 iconBtn"
                      src={icononeset.iconsrc}
                      alt={icononeset.iconalt}
                    />
                  </td>

                  {/* <Modal isOpen={modal} toggle={toggle} {...args}>
                    <ModalHeader toggle={toggle}>
                      <Image
                        className="d-block w-10"
                        src={icononeset.iconsrc}
                        alt={icononeset.iconalt}
                      />
                      {icononeset.title}
                    </ModalHeader>
                    <ModalBody>{icononeset.icontxt}</ModalBody>
                    <ModalFooter>
                      <p>A.Lipede</p>
                    </ModalFooter>
                  </Modal> */}
                </>
              );
            })}
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default IconsSetOne;
