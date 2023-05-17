import Head from 'next/head';
import ContainerItem from '../../components/ui/container-item';
import ProjectTable from './project-table';
import AccordionList from './accordion';

function WebDevelopmentPage() {
  return (
    <>
      <Head>
        <title>igi iroko | Web Development</title>
      </Head>
      <h1>Web Development</h1>
      <ContainerItem>
        <ProjectTable />
      </ContainerItem>
      <ContainerItem>
        <AccordionList />
      </ContainerItem>
    </>
  );
}

export default WebDevelopmentPage;
