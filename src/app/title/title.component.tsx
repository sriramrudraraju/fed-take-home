import React, { FC } from 'react';

import Typography from '@material-ui/core/Typography';
import { useStyles } from './title.styles';

interface TitleProps {
  isOriginal?: boolean;
  title: string;
}

export const Title: FC<TitleProps> = ({isOriginal = true, title}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      { isOriginal && <Typography variant="h6">Netflix Original</Typography>}
  <Typography variant="h3">{title}</Typography>
    </div>
  )
}