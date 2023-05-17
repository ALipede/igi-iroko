import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Image from 'next/image';
import classes from './digital-arts.module.scss';

function BirdSketchbook() {
  const [dataResponse, setDataResponse] = useState([]);

  useEffect(() => {
    async function getPageData() {
      const apiUrlEndpoint = 'http://localhost:3000/api/data-sketchbook';
      const response = await fetch(apiUrlEndpoint);
      const res = await response.json();
      setDataResponse(res.sketchbooks);
    }
    getPageData();
  }, []);

  return (
    <>
      <h2>Sketchbook</h2>
      <Table responsive className={classes.tableTxt}>
        <tbody>
          <tr className={classes.trBkg}>
            {dataResponse.map(sketchbook => {
              return (
                <td key={sketchbook.id}>
                  <Image
                    src={sketchbook.image}
                    width={200}
                    height={245}
                    alt={sketchbook.title}
                  />
                </td>
              );
            })}
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default BirdSketchbook;
