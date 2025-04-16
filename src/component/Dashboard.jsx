import React, { useState } from "react";
import Navbar, { CustomDrawer } from './common/navbar';
import {
  Box,
  Typography,
  Grid,
  TextField,
  TableContainer,
  MenuItem,
  Table,
  TablePagination,
  Paper,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  InputLabel,
  FormControl,
  Select,
} from "@mui/material";

const Dashboard = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchText, setSearchText] = useState('');

  const districts = ["YSR KADAPA", "CHITTOOR", "NELLORE"];
  const types = ["Regular"];
  const modes = ["Draw of Lots"];
  const categories = ["OPEN", "SC", "ST"];

  const rows = [
    {
      territory: "Nellore",
      district: "YSR KADAPA",
      location: "Porumamilla town (not on Badvel road nor Mydukur road)",
      type: "Regular",
      mode: "Draw of Lots",
      category: "OPEN",
    },
    {
      territory: "Nellore",
      district: "CHITTOOR",
      location: "Between Palamaneru & Gandrajupalli RHS on NH-4",
      type: "Regular",
      mode: "Draw of Lots",
      category: "SC",
    },
    {
      territory: "Nellore",
      district: "NELLORE",
      location: "Kavali Town Limits",
      type: "Regular",
      mode: "Draw of Lots",
      category: "ST",
    },
  ];

  const filteredRows = rows.filter((row) =>
    Object.values(row)
      .join(' ')
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );

  return (
    <div>
      <Navbar isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <CustomDrawer isDrawerOpen={isDrawerOpen} />
      <Box sx={{ display: 'flex', pt: '64px', backgroundColor: '#d6d6d6', minHeight: '100vh' }}>
        {isDrawerOpen && <Box sx={{ width: 240 }} />}

        <Box p={3}>
          {/* Header Info */}
          <Box display="flex" flexWrap="wrap" gap={2}>
          {/* First 3 items with underline below key + value */}
          <Box sx={{ flex: '1 1 calc(50% - 16px)' }}>
            <Box sx={{ borderBottom: '1px solid black', pb: '10px', display: 'inline-block' }}>
              <Typography variant="body2">
                <strong>Title:</strong> ADVfor News
              </Typography>
            </Box>
          </Box>

          <Box sx={{ flex: '1 1 calc(50% - 16px)' }}>
            <Box sx={{ borderBottom: '1px solid black', pb: '10px', display: 'inline-block' }}>
              <Typography variant="body2">
                <strong>Published Date:</strong> 01 August 2018
              </Typography>
            </Box>
          </Box>

          <Box sx={{ flex: '1 1 calc(50% - 16px)' }}>
            <Box sx={{ borderBottom: '1px solid black', pb: '10px', display: 'inline-block' }}>
              <Typography variant="body2">
                <strong>Company Name:</strong> Bharat Petroleum Corporation Ltd
              </Typography>
            </Box>
          </Box>

          {/* Remaining items (no underline) */}
          <Box sx={{ flex: '1 1 calc(50% - 16px)' }}>
            <Typography variant="body2">
              <strong>Closing Date:</strong> 23 November 2018
            </Typography>
          </Box>

          <Box sx={{ flex: '1 1 calc(50% - 16px)' }}>
            <Typography variant="body2">
              <strong>State Name:</strong> ANDHRA PRADESH
            </Typography>
          </Box>
        </Box>


          <Box mt={2} mb={2} textAlign="center">
            <Typography color="primary" sx={{ cursor: 'pointer', textDecoration: 'underline' }}>
              View Newspaper advertisement
            </Typography>
          </Box>

          {/* Filters */}
          <Box component="main" sx={{ flexGrow: 1, p: 1, backgroundColor: 'white' }}>
            <Box sx={{ backgroundColor: '#f5f5f5', px: 2, py: 1.5 }}>
              <Typography variant="subtitle1" fontWeight="bold">📑 Advertisements Details - Location</Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <Typography variant="body2" sx={{ minWidth: 80 }}>Filter by:</Typography>
              <FormControl sx={{ minWidth: 180 }} size="small">
                <InputLabel>District</InputLabel>
                <Select label="District">
                  {districts.map((d) => <MenuItem key={d} value={d}>{d}</MenuItem>)}
                </Select>
              </FormControl>

              <FormControl sx={{ minWidth: 180 }} size="small">
                <InputLabel>Type of RO</InputLabel>
                <Select label="Type of RO">
                  {types.map((t) => <MenuItem key={t} value={t}>{t}</MenuItem>)}
                </Select>
              </FormControl>

              <FormControl sx={{ minWidth: 180 }} size="small">
                <InputLabel>Mode of selection</InputLabel>
                <Select label="Mode of selection">
                  {modes.map((m) => <MenuItem key={m} value={m}>{m}</MenuItem>)}
                </Select>
              </FormControl>

              <FormControl sx={{ minWidth: 180 }} size="small">
                <InputLabel>Category Name</InputLabel>
                <Select label="Category Name">
                  {categories.map((c) => <MenuItem key={c} value={c}>{c}</MenuItem>)}
                </Select>
              </FormControl>
            </Box>
          </Box>

         {/* Pagination + Search */}
         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1, backgroundColor: 'white' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body2" sx={{ mr: 1 }}>
              Show
            </Typography>
            
            <FormControl size="small">
              <Select
                value={rowsPerPage}
                onChange={(e) => {
                  setRowsPerPage(parseInt(e.target.value, 10));
                  setPage(0); // Reset to the first page when rows per page changes
                }}
                sx={{ minWidth: 60, height: 35 }}
              >
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={15}>15</MenuItem>
              </Select>
            </FormControl>
            
            <Typography variant="body2" sx={{ ml: 1 }}>
              entries
            </Typography>
          </Box>

          <TextField
            size="small"
            variant="outlined"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            sx={{ width: 150, height: 35 }}
          />
        </Box>

          {/* Table */}
          <TableContainer component={Paper} variant="outlined">
            <Table size="small">
              <TableHead>
                <TableRow sx={{ backgroundColor: 'whte' }}>
                  <TableCell>Territory</TableCell>
                  <TableCell>District</TableCell>
                  <TableCell>Location Description</TableCell>
                  <TableCell>Type of RO</TableCell>
                  <TableCell>Mode of selection</TableCell>
                  <TableCell>Category Name</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, i) => (
                    <TableRow key={i}>
                      <TableCell>{row.territory}</TableCell>
                      <TableCell>{row.district}</TableCell>
                      <TableCell>{row.location}</TableCell>
                      <TableCell>{row.type}</TableCell>
                      <TableCell>{row.mode}</TableCell>
                      <TableCell>{row.category}</TableCell>
                      <TableCell>
                        <Button variant="contained" color="primary" size="small">
                          Apply Now
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;
