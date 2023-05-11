import Head from 'next/head';
import classes from './ui-design.module.scss';
import ContainerItem from '../../components/ui/container-item';
import AccordionList from '../../components/ui/accordion';

export default function UiDesignPage() {
  return (
    <>
      <Head>
        <title>igi iroko | UI Design</title>
      </Head>
      <main className={classes.main}>
        <h1>UI Design</h1>
        <ContainerItem>
          <AccordionList />
          <p>Page under contruction.</p>
        </ContainerItem>
      </main>
    </>
  );
}
