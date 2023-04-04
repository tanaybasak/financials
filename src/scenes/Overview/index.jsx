import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'
import Header from '../../components/Header'
import OverviewChart from '../../components/OverviewChart';

const Overview = () => {

  const [view, setView] = useState('units');

  return <Box m="1.5rem 2.5rem">
    <Header title={"Overview"} subtitle={"Entire List of Overview"} />
    <Box height={"70vh"} width={"95%"}>
      <FormControl sx={{ mt: '1rem' }}>

        <InputLabel> View </InputLabel>
        <Select value={view} label={"View"} onChange={(e) => setView(e.target.value)} >
          <MenuItem value={"sales"}>Sales</MenuItem>
          <MenuItem value={"units"}>Units</MenuItem>

        </Select>
      </FormControl>
      <OverviewChart view={view} />

    </Box>
  </Box>
}

export default Overview;