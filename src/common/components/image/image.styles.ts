import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative'
  },
  image: {
    backgroundColor: '#000' ,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%'
  },
  summary: {
    position: 'absolute',
    bottom: '0%',
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.8)',
    padding: theme.spacing(1)
  }
}));