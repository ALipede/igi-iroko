import ListGroup from 'react-bootstrap/ListGroup';
import Link from 'next/link';
import classes from './contact.module.scss';
import { FaEnvelope, FaMobileAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

function ContactList() {
  const contactinfos = [
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
      {contactinfos.map(contactinfo => (
        <ListGroup.Item key={contactinfo.id}>
          <Link href={contactinfo.address} target={contactinfo.target}>
            <span className={classes.icons}>{contactinfo.icon}</span>
            {contactinfo.ref}
          </Link>
        </ListGroup.Item>
      ))}
    </>
  );
}

export default ContactList;
