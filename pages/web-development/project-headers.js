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
    </>
  );
}

export default ProjectHeaders;
