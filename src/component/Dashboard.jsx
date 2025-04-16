import React , { useState }from "react";
import Navbar, { CustomDrawer } from './common/navbar';
import {
  Box,
  Typography,
  Grid,
  TextField,
  MenuItem,
  Table,
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
  const districts = ["YSR KADAPA", "CHITTOOR", "NELLORE"];
  const types = ["Regular"];
  const modes = ["Draw of Lots"];
  const categories = ["OPEN", "SC", "ST"];
   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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

  return (
    <div>
       <Navbar isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
       <CustomDrawer isDrawerOpen={isDrawerOpen} />
        <Box sx={{ display: 'flex', pt: '64px' }}>
               {isDrawerOpen && <Box sx={{ width: 240 }} />} {/* Drawer width spacer */}
    
    <Box p={3}>
      
      <Typography variant="body2">
        <strong>Company Name:</strong> Bharat Petroleum Corporation Ltd
      </Typography>
      <Typography variant="body2">
        <strong>State Name:</strong> ANDHRA PRADESH
      </Typography>
      <Typography variant="body2">
        <strong>Published Date:</strong> 01 August 2018
      </Typography>
      <Typography variant="body2">
        <strong>Closing Date:</strong> 23 November 2018
      </Typography>

      <Box mt={2} mb={2}>
        <Typography color="primary" sx={{ cursor: "pointer" }}>
          View Newspaper advertisement
        </Typography>
      </Box>
       <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
                <Box sx={{ backgroundColor: '#f5f5f5', p: 2, borderRadius: 1, mb: 2 }}>
                  <Typography variant="subtitle1" fontWeight="bold">📑Advertisements Details-Location</Typography>
                </Box>

       <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Typography variant="body2" sx={{ minWidth: 80 }}>Filter by:</Typography>
            <FormControl sx={{ minWidth: 180 }} size="small">
              <InputLabel>District</InputLabel>
              <Select label="District">
                {districts.map((d) => (
                  <MenuItem key={d} value={d}>
                    {d}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          
           
            <FormControl sx={{ minWidth: 180 }} size="small">
              <InputLabel>Type of RO</InputLabel>
              <Select label="Type of RO">
                {types.map((t) => (
                  <MenuItem key={t} value={t}>
                    {t}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
         
         
            <FormControl sx={{ minWidth: 180 }} size="small">
              <InputLabel>Mode of selection</InputLabel>
              <Select label="Mode of selection">
                {modes.map((m) => (
                  <MenuItem key={m} value={m}>
                    {m}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
         
           
            <FormControl sx={{ minWidth: 180 }} size="small">
              <InputLabel>Category Name</InputLabel>
              <Select label="Category Name">
                {categories.map((c) => (
                  <MenuItem key={c} value={c}>
                    {c}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
         </Box>
      </Box>

     
       <TableContainer component={Paper} variant="outlined">
                   <Table size="small">
                     <TableHead>
                       <TableRow sx={{ backgroundColor: '#e0e0e0' }}>
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
            {rows.map((row, i) => (
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
