import React, { useState } from 'react';
import Navbar, { CustomDrawer } from './common/navbar';
import {
  Box, Typography, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Button, Select, MenuItem, FormControl,
  InputLabel, TablePagination
} from '@mui/material';

const data = [
  {
    title: "ADVT FOR NEW ROs IN ANDHRAPRADESH",
    company: "BPC",
    state: "ANDHRA PRADESH",
    openingDate: "01-Aug-2018",
    closingDate: "23-Nov-2018"
  },
  {
    title: "ADVT FOR NEW ROs PUNJAB",
    company: "IOC",
    state: "PUNJAB",
    openingDate: "26-Jul-2018",
    closingDate: "30-Nov-2018"
  },
  {
    title: "Appointment of Retail Outlet Dealerships in the State of Punjab By HPCL",
    company: "HPC",
    state: "PUNJAB",
    openingDate: "24-Jul-2018",
    closingDate: "02-Dec-2018"
  }
];

export default function AdvertisementDashboard() {
  const [companyFilter, setCompanyFilter] = useState('');
  const [stateFilter, setStateFilter] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const filteredData = data.filter(item =>
    (companyFilter ? item.company === companyFilter : true) &&
    (stateFilter ? item.state === stateFilter : true)
  );

  const handleChangePage = (_, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <Navbar isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <CustomDrawer isDrawerOpen={isDrawerOpen} />

      {/* Push content below navbar */}
      <Box sx={{ display: 'flex', pt: '64px' }}>
        {isDrawerOpen && <Box sx={{ width: 240 }} />} {/* Drawer width spacer */}

        <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
          <Box sx={{ backgroundColor: '#f5f5f5', p: 2, borderRadius: 1, mb: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold">📑 Available Advertisements</Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Typography variant="body2" sx={{ minWidth: 80 }}>Filter by:</Typography>
            <FormControl sx={{ minWidth: 180 }} size="small">
              <InputLabel>Company</InputLabel>
              <Select value={companyFilter} label="Company" onChange={(e) => setCompanyFilter(e.target.value)}>
                <MenuItem value="">All</MenuItem>
                <MenuItem value="BPC">BPC</MenuItem>
                <MenuItem value="IOC">IOC</MenuItem>
                <MenuItem value="HPC">HPC</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 180 }} size="small">
              <InputLabel>State</InputLabel>
              <Select value={stateFilter} label="State" onChange={(e) => setStateFilter(e.target.value)}>
                <MenuItem value="">All</MenuItem>
                <MenuItem value="ANDHRA PRADESH">ANDHRA PRADESH</MenuItem>
                <MenuItem value="PUNJAB">PUNJAB</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <TableContainer component={Paper} variant="outlined">
            <Table size="small">
              <TableHead>
                <TableRow sx={{ backgroundColor: '#e0e0e0' }}>
                  <TableCell><b>Title</b></TableCell>
                  <TableCell><b>Company</b></TableCell>
                  <TableCell><b>State</b></TableCell>
                  <TableCell><b>Opening Date</b></TableCell>
                  <TableCell><b>Closing Date</b></TableCell>
                  <TableCell><b>Action</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                  <TableRow key={index} sx={{ backgroundColor: index % 2 === 0 ? '#fff' : '#f9f9f9' }}>
                    <TableCell>{row.title}</TableCell>
                    <TableCell>{row.company}</TableCell>
                    <TableCell>{row.state}</TableCell>
                    <TableCell>{row.openingDate}</TableCell>
                    <TableCell>{row.closingDate}</TableCell>
                    <TableCell>
                      <Button variant="outlined" size="small">View Details</Button>
                    </TableCell>
                  </TableRow>
                ))}
                {filteredData.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={6} align="center">No data available</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>

          <Box sx={{ mt: 1 }}>
            <TablePagination
              component="div"
              count={filteredData.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              rowsPerPageOptions={[5, 10, 25]}
              labelRowsPerPage="Show"
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
}
