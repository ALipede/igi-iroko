// import Head from 'next/head';
// import path from 'path';
// import fs from 'fs/promises';
// import classes from './digital-arts.module.scss';
// import ContainerItem from '../../components/ui/container-item';
// import { Carousel } from 'react-bootstrap';
// import Image from 'react-bootstrap/Image';

// function DigitalArtsPage(props) {
//   const { imgviews } = props;

//   return (
//     <>
//       <Head>
//         <title>igi iroko | Digital Arts</title>
//       </Head>

//       <main className={classes.main}>
//         <h1>Digital Arts</h1>
//         <ContainerItem>
//           <Carousel>
//             {imgviews.map(imgview => (
//               <Carousel.Item key={imgview.id}>
//                 <Image
//                   className="d-block w-100"
//                   src={imgview.image}
//                   alt={imgview.alt}
//                 />
//                 <Carousel.Caption>
//                   <h3>{imgview.title}</h3>
//                   <p>{imgview.description}</p>
//                 </Carousel.Caption>
//               </Carousel.Item>
//             ))}
//           </Carousel>
//           <p>Page under construction.</p>
//         </ContainerItem>
//       </main>
//     </>
//   );
// }

// export async function getStaticProps() {
//   const filePath = path.join(process.cwd(), 'data', 'data-digital-arts.json');
//   const jsonData = await fs.readFile(filePath);
//   const data = JSON.parse(jsonData);

//   return {
//     props: {
//       imgviews: data.imgviews,
//     },
//   };
// }

// export default DigitalArtsPage;

//////////////////////

// import React, { useState } from 'react';
// import path from 'path';
// import fs from 'fs/promises';

// import { Table } from 'reactstrap';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import classes from './icons.module.scss';
// import Image from 'react-bootstrap/Image';

// function IconsSetOne(props, args) {
//   const { icononesets } = props;

//   const [modal, setModal] = useState(false);
//   const toggle = () => setModal(!modal);

//   return (
//     <>
//       <h2 className={classes.heading}>ICONS 001</h2>
//       <p>
//         Click on icons to <em>view:</em>
//       </p>
//       <Table responsive className={classes.iconsTable}>
//         <tbody>
//           <tr>
//             {icononesets.map(icononeset => (
//               <td scope="row" key={icononeset.id}>
//                 <Button
//                   color="dark"
//                   onClick={toggle}
//                   className={classes.iconBtn}
//                 >
//                   <Image
//                     className="d-block w-10"
//                     src={icononeset.iconsrc}
//                     alt={icononeset.iconalt}
//                   />
//                 </Button>
//               </td>
//             ))}
//           </tr>
//         </tbody>
//       </Table>

//       <Modal isOpen={modal} toggle={toggle} {...args}>
//         {icononesets.map(icononeset => (
//           <main key={icononeset.id}>
//             <ModalHeader toggle={toggle}>
//               <Image
//                 className="d-block w-10"
//                 src={icononeset.iconsrc}
//                 alt={icononeset.iconalt}
//               />
//               {icononeset.title}
//             </ModalHeader>
//             <ModalBody>{icononeset.icontxt}</ModalBody>
//             <ModalFooter>
//               <p>A.Lipede</p>
//             </ModalFooter>
//           </main>
//         ))}
//       </Modal>
//     </>
//   );
// }

// export async function getStaticProps() {
//   const filePath = path.join(process.cwd(), 'data', 'data-icons-set.json');
//   const jsonData = await fs.readFile(filePath);
//   const data = JSON.parse(jsonData);

//   return {
//     props: {
//       icononesets: data.icononesets,
//     },
//   };
// }

// export default IconsSetOne;

/////////////////////

import { useEffect, useState } from 'react';
import classes from './digital-arts.module.scss';

export default function DigitalArtsPage() {
  useEffect(() => {}, []);
  return (
    <main className={classes.main}>
      <div>
        <p>Set up My SQL databade</p>
      </div>
    </main>
  );
}
