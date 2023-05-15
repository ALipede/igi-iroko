import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import classes from './digital-arts.module.scss';
import Image from 'react-bootstrap/Image';

function IconsSetTwo(args) {
  const [dataResponse, setDataResponse] = useState([]);

  useEffect(() => {
    async function getPageData() {
      const apiUrlEndpoint = 'http://localhost:3000/api/data-iconstwo';
      const response = await fetch(apiUrlEndpoint);
      const res = await response.json();
      setDataResponse(res.icononesets);
    }
    getPageData();
  }, []);

  return (
    <>
      <h2>ICONS 002</h2>
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
                </>
              );
            })}
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default IconsSetTwo;
