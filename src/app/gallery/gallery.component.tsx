import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import * as data from '../../data/en_US.json';

import { useStyles } from './gallery.styles';

export const Gallery = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {data["gallery"].map((list) => (
        <Card className={classes.card} key={list.text}>
          <CardMedia
            className={classes.media}
            image={list.src}
          />
          <Typography gutterBottom variant="body2"  className={classes.cardText}>
            {list.text}
          </Typography>
        </Card>
      ))}
    </div>
  )
}