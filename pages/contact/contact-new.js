// import path from 'path';
// import fs from 'fs/promises';
// import ListGroup from 'react-bootstrap/ListGroup';
// import Link from 'next/link';
// import classes from './contact.module.scss';
// import DownloadCv from './download-cv';

// function ContactNew(props) {
//   const { informations } = props;

//   return (
//     <div>
//       <hr />
//       <ListGroup variant="flush" className={classes.list}>
//         {informations.map(information => (
//           <ListGroup.Item key={information.id}>
//             <Link href={information.href} target={information.target}>
//               <span className={classes.icons}>{information.icons}</span>{' '}
//               {information.ref}
//             </Link>
//           </ListGroup.Item>
//         ))}
//         <ListGroup.Item>
//           <DownloadCv />
//         </ListGroup.Item>
//       </ListGroup>
//     </div>
//   );
// }

// export async function getStaticProps() {
//   const filePath = path.join(process, cwd(), 'data', 'data-contact.json');
//   const jsonData = await fs.readFile(filePath);
//   const data = JSON.parse(jsonData);

//   return {
//     props: { informations: data.informations },
//   };
// }

// export default ContactNew;

////////////////////////////////
