import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

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

function ProjectHeaders() {
  return (
    <>
      <TableHead>
        <TableRow hover>
          <StyledTableCell>Project URLs:</StyledTableCell>
          <StyledTableCell align="center">
            <FaHtml5 />
          </StyledTableCell>
          <StyledTableCell align="center">
            <FaCss3 />
          </StyledTableCell>
          <StyledTableCell align="center">
            <FaReact />
          </StyledTableCell>
          <StyledTableCell align="center">
            <TbBrandNextjs />
          </StyledTableCell>
          <StyledTableCell align="center">
            <FaSass />
          </StyledTableCell>
          <StyledTableCell align="center">
            <FaLess />
          </StyledTableCell>
          <StyledTableCell align="center">
            <FaPhp />
          </StyledTableCell>
          <StyledTableCell align="center">
            <FaBootstrap />
          </StyledTableCell>
          <StyledTableCell align="center">
            <FaWordpress />
          </StyledTableCell>
        </TableRow>
      </TableHead>
    </>
  );
}

export default ProjectHeaders;
