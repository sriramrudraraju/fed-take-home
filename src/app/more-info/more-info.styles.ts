import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: theme.spacing(1)
  },
  snippet: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1),
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText
  },
  location: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.secondary.contrastText
  },
  title: {
    color: theme.palette.primary.contrastText
  }
}));