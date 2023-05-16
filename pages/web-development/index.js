import Head from 'next/head';
import classes from './web-development.module.scss';
import ContainerItem from '../../components/ui/container-item';
import ProjectTable from './project-table';
import AccordionList from './accordion';

function WebDevelopmentPage() {
  return (
    <>
      <Head>
        <title>igi iroko | Web Development</title>
      </Head>
      <main className={classes.main}>
        <h1>Web Development</h1>
        <ContainerItem>
          <ProjectTable />
        </ContainerItem>
        <ContainerItem>
          <AccordionList />
        </ContainerItem>
      </main>
    </>
  );
}

export default WebDevelopmentPage;
