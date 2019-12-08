import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.primary.light,
    minHeight: '100vh'
  },
  mainImage: {
    width: 'calc(40% - 32px)',
    height: 628,
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  details: {
    width: 'calc(60% - 32px)',
    padding: theme.spacing(2),
    backgroundcolor: theme.palette.primary.light,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  }
}));