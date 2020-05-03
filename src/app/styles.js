import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    padding: 50,
  },
  pageTitle: {
    marginBottom: 50,
  },
  gridList: {
    width: '100%',
    height: '100%',
    flexWrap: 'nowrap',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}))
