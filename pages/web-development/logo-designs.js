import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Image from 'next/image';
import classes from './web-development.module.scss';

function LogoDesigns() {
  const [dataResponse, setDataResponse] = useState([]);

  useEffect(() => {
    async function getPageData() {
      const apiUrlEndpoint = 'http://localhost:3000/api/data-logodesigns';
      const response = await fetch(apiUrlEndpoint);
      const res = await response.json();
      setDataResponse(res.designs);
    }
    getPageData();
  }, []);

  return (
    <Table responsive className={classes.tableTxt}>
      <thead>
        <tr>
          {dataResponse.map(design => {
            return (
              <td key={design.id} align="center">
                {design.title}
              </td>
            );
          })}
        </tr>
      </thead>
      <tbody>
        <tr className={classes.trBkg}>
          {dataResponse.map(design => {
            return (
              <td key={design.id}>
                <Image
                  src={design.design}
                  width={180}
                  height={180}
                  alt={design.title}
                />
              </td>
            );
          })}
        </tr>
      </tbody>
    </Table>
  );
}

export default LogoDesigns;
