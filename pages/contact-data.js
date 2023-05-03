import path from 'path';
import fs from 'fs/promises';
import classes from '../pages/contact/contact.module.scss';

function ContactData(props) {
  const { contactinfos } = props;

  return (
    <main className={classes.main}>
      <ul className={classes.listUl}>
        {contactinfos.map(contactinfo => (
          <li key={contactinfo.id}>
            <a href={contactinfo.address}>{contactinfo.ref}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'data-contact.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      contactinfos: data.contactinfos,
    },
  };
}

export default ContactData;
