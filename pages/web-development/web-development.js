import Link from 'next/link';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
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
  FaMinus,
  FaPlus,
} from 'react-icons/fa';
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

function WebDevelopment() {
  const rows = [
    {
      id: 'url1',
      name: 'christopher-rushbrooke.com',
      urls: '',
      html5: <FaPlus />,
      css3: <FaPlus />,
      reactjs: <FaPlus />,
      nextjs: <FaMinus />,
      sass: <FaMinus />,
      less: <FaPlus />,
      php: <FaPlus />,
      bootstrap: <FaPlus />,
      wordpress: <FaMinus />,
    },
    {
      id: 'url2',
      name: 'afunja.com',
      urls: 'https://afunja.com',
      html5: <FaPlus />,
      css3: <FaPlus />,
      reactjs: <FaPlus />,
      nextjs: <FaMinus />,
      sass: <FaMinus />,
      less: <FaPlus />,
      php: <FaMinus />,
      bootstrap: <FaPlus />,
      wordpress: <FaMinus />,
    },
    {
      id: 'url3',
      name: 'coacoseal.com',
      urls: 'http://coacoseal.com',
      html5: <FaPlus />,
      css3: <FaPlus />,
      reactjs: <FaMinus />,
      nextjs: <FaPlus />,
      sass: <FaPlus />,
      less: <FaMinus />,
      php: <FaMinus />,
      bootstrap: <FaPlus />,
      wordpress: <FaMinus />,
    },
  ];

  return (
    <div>
      {' '}
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
              {rows.map(row => (
                <StyledTableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <StyledTableCell component="th" scope="row">
                    <Link href={row.urls} target="_blank">
                      {row.name}
                    </Link>
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.html5}</StyledTableCell>
                  <StyledTableCell align="right">{row.css3}</StyledTableCell>
                  <StyledTableCell align="right">{row.reactjs}</StyledTableCell>
                  <StyledTableCell align="right">{row.nextjs}</StyledTableCell>

                  <StyledTableCell align="right">{row.sass}</StyledTableCell>
                  <StyledTableCell align="right">{row.less}</StyledTableCell>
                  <StyledTableCell align="right">{row.php}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.bootstrap}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.wordpress}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
export default WebDevelopment;
