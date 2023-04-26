import ListGroup from 'react-bootstrap/ListGroup';
import Link from 'next/link';
import classes from './contact.module.scss';
import DownloadCv from './download-cv';

export default function ContactList(props) {
  const { items } = props;
  return (
    <div>
      <hr />
      <ListGroup variant="flush" className={classes.list}>
        {items.map(views => (
          <ListGroup.Item key={views.id}>
            <Link href={views.href} target={views.target}>
              <span className={classes.icons}>{views.icon}</span> {views.ref}
            </Link>
          </ListGroup.Item>
        ))}
        <ListGroup.Item>
          <DownloadCv />
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
