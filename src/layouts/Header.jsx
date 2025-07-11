import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';

export default function Header({value, handleChange}) {

    return (
        <div style={{textAlign: 'center'}}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList value={value} onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Home" value="1" />
                    <Tab label="About" value="2" />
                    <Tab label="Project" value="3" />
                    <Tab label="Resume" value="4" />
                </TabList>
            </Box>
        </div>
    );
}
