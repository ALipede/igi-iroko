import { useEffect, useState } from 'react';
import Link from 'next/link';
import classes from './web-development.module.scss';

import { styled } from '@mui/material/styles';
import ProjectHeaders from './project-headers';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

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

function ProjectTable() {
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
                    <StyledTableCell align="center">
                      {project.html5}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {project.css3}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {project.rjs}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {project.njs}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {project.sass}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {project.less}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {project.php}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {project.bstrap}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {project.wpress}
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}

export default ProjectTable;
