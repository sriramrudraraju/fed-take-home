import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxHeight: 380,
    overflowY: 'scroll'
  },
  listItem: {
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5),
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText
  },
  secondaryText: {
    display: 'flex',
    justifyContent: 'space-between',
    color: theme.palette.primary.contrastText
  }
}));