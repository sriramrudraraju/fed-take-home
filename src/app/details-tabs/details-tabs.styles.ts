import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabsPanel: {
    '& >div': {
      padding: 0,
      paddingTop: theme.spacing(0.25),
      paddingBottom: theme.spacing(0.25),
      backgroundColor: theme.palette.primary.light,
      maxHeight: 466,
      overflowY: 'scroll',
    }
  }
}));