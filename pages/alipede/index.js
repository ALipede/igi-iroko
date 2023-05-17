import Head from 'next/head';
import classes from './alipede.module.scss';

import ContainerItem from '../../components/ui/container-item';
import ALipedeProfile from './profile';
import ProfileTxt from './profile-txt';

export default function AipedePage() {
  return (
    <>
      <Head>
        <title>igi iroko | A.Lipẹdé</title>
      </Head>

      <h1>Afolabi Lipedé</h1>
      <ContainerItem>
        <ALipedeProfile />
        <ProfileTxt />
      </ContainerItem>
    </>
  );
}
