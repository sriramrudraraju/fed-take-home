import React, { FC, useState } from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Pause from '@material-ui/icons/Pause';

import { useStyles } from './image.styles';

interface ImageProps {
  title: string;
  text?: string;
  height?: number;
  width?: number;
  src: string;
}

export const Image: FC<ImageProps> = ({
  title,
  text,
  height = '100%', 
  width ='100%', 
  src}) => {
  const classes = useStyles();
  const [play, togglePlay] = useState(true);
  return (
    <Paper style={{height, width}}  className={classes.root}>
      <div style={{backgroundImage: `url(${src})`}} className={classes.image} />
      <div className={classes.summary}>
        <Fab 
          color="secondary" 
          aria-label="add" 
          size="small" 
          variant="extended"
        >  
          {
            play 
              ? <PlayArrow onClick={() => togglePlay(false)} /> 
              : <Pause  onClick={() => togglePlay(true)} />
          }
        </Fab>
        <Typography variant="h6">{title}</Typography>
        <p><small>{text}</small></p>
      </div>
    </Paper>
  )
}