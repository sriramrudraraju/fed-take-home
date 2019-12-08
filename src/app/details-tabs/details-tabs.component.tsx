import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { Gallery } from '../gallery/gallery.component';
import { Episodes } from '../episodes/episodes.component';
import { MoreInfo } from '../more-info/more-info.component';

import { useStyles } from './details-tabs.styles';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const classes = useStyles();
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className={classes.tabsPanel}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const DetailsTabs = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} variant="fullWidth" aria-label="simple tabs example">
          <Tab label="Episodes" {...a11yProps(0)} />
          <Tab label="Gallery" {...a11yProps(1)} />
          <Tab label="More Info" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Episodes />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Gallery />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MoreInfo />
      </TabPanel>
    </div>
  );
}