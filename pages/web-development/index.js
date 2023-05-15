import { useEffect, useState } from 'react';
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
import TableRow from '@mui/material/TableRow';

import ProjectHeaders from './project-headers';
import AccordionList from '../../components/ui/accordion';

import { RiExternalLinkLine } from 'react-icons/ri';

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

function WebDevelopmentPage() {
  const [dataResponse, setDataResponse] = useState([]);

  useEffect(() => {
    async function getPageData() {
      const apiUrlEndpoint = 'http://localhost:3000/api/data-webdev';
      const response = await fetch(apiUrlEndpoint);
      const res = await response.json();
      setDataResponse(res.projects);
    }
    getPageData();
  }, []);

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
                <ProjectHeaders />
                <TableBody>
                  {dataResponse.map(project => {
                    return (
                      <StyledTableRow
                        key={project.id}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 },
                        }}
                      >
                        <StyledTableCell component="th" scope="row">
                          <span className={classes.exlink}>
                            <RiExternalLinkLine />
                          </span>
                          <Link
                            href={project.address}
                            target="_blank"
                            className={classes.link}
                          >
                            {project.title}
                          </Link>
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {project.html5}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {project.css3}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {project.rjs}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {project.njs}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {project.sass}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {project.less}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {project.php}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {project.bstrap}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {project.wpress}
                        </StyledTableCell>
                      </StyledTableRow>
                    );
                  })}
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

export default WebDevelopmentPage;
