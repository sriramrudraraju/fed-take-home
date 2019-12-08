import React from 'react';

import { Title } from '../title/title.component';
import { DetailsTabs } from '../details-tabs/details-tabs.component';
import { Image } from '../../common/components/image/image.component';

import mainImage from '../../common/images/stanger-things_raw.png';

import { useData } from '../../data';

import { useStyles } from './content.styles';

export const Content = () => {
  const classes = useStyles();
  const data = useData();
  return (
    <div className={classes.root}>
      <div className={classes.mainImage}>
        <Image src={mainImage} title={data.heading} text={data.description} />
      </div>
      <div className={classes.details}>
        <Title title={data.heading} />
        <DetailsTabs />
      </div>
    </div>
  )
}