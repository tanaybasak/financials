import { Box } from '@mui/material';
import Header from '../../components/Header';
import React from 'react'
import BreakdownChart from '../../components/BreakdownChart';

function Breakdown() {
    return (
        <Box m="1.5rem 2.5rem">
            <Header title="BREAKDOWN" subtitle="Breakdown of sales by Category" />
            <BreakdownChart />
        </Box>
    )
}

export default Breakdown;