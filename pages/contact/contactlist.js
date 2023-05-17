import ListGroup from 'react-bootstrap/ListGroup';
import Link from 'next/link';
import classes from './contact.module.scss';
import { FaEnvelope, FaMobileAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

function ContactList() {
  const viewinfos = [
    {
      id: 'ct1',
      ref: 'alipede@igi-iroko.com',
      address:
        'mailto:alipede@igi-iroko.com?subject=igi iroko | Web Development&body=igi iroko : Contact - A.Lipede',
      target: '',
      icon: <FaEnvelope />,
    },
    {
      id: 'ct2',
      ref: '+4407830350762',
      address: 'tel:+4407830350763',
      target: '',
      icon: <FaMobileAlt />,
    },
    {
      id: 'ct3',
      ref: 'LinkedIn/alipede',
      address: 'https://www.linkedin.com/in/alipede/',
      target: '_blank',
      icon: <FaLinkedin />,
    },
    {
      id: 'ct4',
      ref: 'GitHub/alipede',
      address: 'https://github.com/alipede',
      target: '_blank',
      icon: <FaGithub />,
    },
  ];

  return (
    <>
      {viewinfos.map(viewinfo => (
        <ListGroup.Item key={viewinfo.id}>
          <Link href={viewinfo.address} target={viewinfo.target} passHref>
            <span className={classes.icons}>{viewinfo.icon}</span>
            {viewinfo.ref}
          </Link>
        </ListGroup.Item>
      ))}
    </>
  );
}

export default ContactList;
