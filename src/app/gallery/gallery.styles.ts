import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  card: {
    width: 250,
    margin: theme.spacing(1)
  },
  media: {
    height: 140,
  },
  cardText: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    marginBottom: 0,
    padding: theme.spacing(1),
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  }
}));