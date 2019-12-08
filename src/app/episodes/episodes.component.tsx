import React from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { useData } from '../../data';

import { useStyles } from './episodes.styles';

export const Episodes = () => {
  const classes = useStyles();
  const data = useData();
  return (
    <div className={classes.root}>
      <List component="nav" aria-label="secondary mailbox folders">
      { data["episode-list"].map((list: {name: string; rating: string; season: string}) => (
        <ListItem alignItems="flex-start" button key={list.name} className={classes.listItem}>
        <ListItemText
          primary={list.name}
          secondary={
            <span className={classes.secondaryText}>
              <Typography variant="body2" component="span">Rating {list.rating}</Typography>
              <Typography variant="body2" component="span">Season {list.season}</Typography>
            </span>
          }
        />
      </ListItem>
      ))}
      </List>
    </div>
  )
}