import React from 'react';
import './PortfolioPageMain.css';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ShowAll from './ShowAll/ShowAll';
import Coloring from './Coloring/Coloring';
import Products from './Products/Products';

const PortfolioPageMain = () => {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='mainPageP'>
            <div className="mainPageH">
                <div className="mainPageB">
                    <Box className='tabHead' >
                        <TabContext value={value}>
                            <Box >
                                <TabList onChange={handleChange} className='tabList' >
                                    <Tab label="Show All" value="1" />
                                    <Tab label="coloring" value="2" />
                                    <Tab label="Hair products" value="3" />
                                    <Tab label="Hair style" value="4" />
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <ShowAll></ShowAll>

                            </TabPanel>
                            <TabPanel value="2">
                                <Coloring></Coloring>

                            </TabPanel>
                            <TabPanel value="3">
                                <Products></Products>
                            </TabPanel>
                            <TabPanel value="4">
                            <Products></Products>
                                </TabPanel>
                        </TabContext> 
                    </Box>

                </div>
            </div>

        </div>
    );
};

export default PortfolioPageMain;
