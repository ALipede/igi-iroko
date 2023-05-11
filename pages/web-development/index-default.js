import path from 'path';
import fs from 'fs/promises';
import Head from 'next/head';
import Link from 'next/link';
import classes from './web-development.module.scss';
import ContainerItem from '../../components/ui/container-item';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import AccordionList from '../../components/ui/accordion';

import {
  FaHtml5,
  FaPhp,
  FaReact,
  FaCss3,
  FaSass,
  FaLess,
  FaBootstrap,
  FaWordpress,
} from 'react-icons/fa';
import { RiExternalLinkLine } from 'react-icons/ri';
// NextJs icon
import { TbBrandNextjs } from 'react-icons/tb';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function WeDevelopmentPage(props) {
  const { webdevelopment } = props;

  return (
    <>
      <Head>
        <title>igi iroko | Web Development</title>
      </Head>
      <main className={classes.main}>
        <h1>Web Development</h1>
        <ContainerItem>
          <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow hover>
                    <StyledTableCell>Project URLs:</StyledTableCell>
                    <StyledTableCell align="right">
                      <FaHtml5 />
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <FaCss3 />
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <FaReact />
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <TbBrandNextjs />
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <FaSass />
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <FaLess />
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <FaPhp />
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <FaBootstrap />
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <FaWordpress />
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {webdevelopment.map(webdev => (
                    <StyledTableRow
                      key={webdev.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <StyledTableCell component="th" scope="row">
                        <span className={classes.exlink}>
                          <RiExternalLinkLine />
                        </span>
                        <Link
                          href={webdev.urls}
                          target="_blank"
                          className={classes.link}
                        >
                          {webdev.name}
                        </Link>
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {webdev.html5}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {webdev.css3}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {webdev.reactjs}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {webdev.nextjs}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {webdev.sass}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {webdev.less}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {webdev.php}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {webdev.bootstrap}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {webdev.wordpress}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </ContainerItem>
        <ContainerItem>
          <AccordionList />
        </ContainerItem>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'data-web-dev.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      webdevelopment: data.webdevelopment,
    },
  };
}

export default WeDevelopmentPage;
