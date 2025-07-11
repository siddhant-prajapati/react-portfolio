import * as React from 'react';
import Header from './Header'
import Footer from './Footer'
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import Home from '../pages/Home';
import About from '../pages/About';
import Project from '../pages/Project';
import Resume from '../pages/Resume';


export default function RootComponent() {
    const [value, setValue] = React.useState('1'); // Default to tab 1

    const handleChange = (event, newValue) => {
        console.log("Tab changed to:", newValue);
        setValue(newValue);
    };

    return (
        <div>
        <TabContext value={value}>
            <Header value={value} handleChange={handleChange}/>
            <TabPanel value="1">
                <Home/>
            </TabPanel>
            <TabPanel value="2">
                <About/>
            </TabPanel>
            <TabPanel value="3">
                <Project/>
            </TabPanel>
            <TabPanel value="4">
                <Resume/>
            </TabPanel>
        </TabContext>
        <Footer/>
        </div>
    )
}
