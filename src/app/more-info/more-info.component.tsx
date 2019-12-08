import React from 'react';

import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';

import * as data from '../../data/en_US.json';

import { useStyles } from './more-info.styles';

export const MoreInfo = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.title}>Snippets</Typography>
      {data.snippets.map((snip) => (
        <Paper className={classes.snippet} key={snip}>
          <Typography component="span" variant="body2">{snip}</Typography>
        </Paper>
      ))}
      <Typography variant="h6" className={classes.title}>Locations</Typography>
      {data.locations.map((location) => (
        <Chip size="small" label={location} className={classes.location} key={location} />
      ))}
    </div>
  )
}