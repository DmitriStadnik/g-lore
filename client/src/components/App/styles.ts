import { makeStyles } from "@material-ui/core/styles";

export const useStyles = (drawerWidth: number): any => {
  return makeStyles((theme) => ({
    root: {
      display: 'flex',
      height: 'calc(100% - 64px)',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      backgroundColor: 'rgb(92, 151, 191)'
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      paddingBottom: '100px',
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'space-between',
    },
    drawerHeaderText: {
      paddingLeft: '10px'
    },
    content: {
      flexGrow: 1,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      height: '100%',
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    accordionDetails: {
      width: '100%',
      padding: '0',
    },
    accordionList: {
      width: '100%',
      padding: '0',
      paddingBottom: '10px'
    },
    mainPageButton: {
      padding: '0',
    },
    accordionListItem: {
      padding: '0',
      '&:hover': {
        backgroundColor: "rgb(92, 151, 191)"
      }
    },
    link: {
      color: theme.palette.text.primary,
      display: 'block',
      height: '100%',
      width: '100%',
      padding: '0',
      '&:hover': {
        textDecoration: 'none',
        color: 'white',
      }
    },
    linkText: {
      '& span': {
        fontSize: 14,
        padding: theme.spacing(0, 3),
      }
    },
    linkTextMain: {
      '& span': {
        fontSize: 14,
        padding: theme.spacing(1, 2),
      }
    },
    contentLink: {
      color: 'rgb(30, 51, 237)',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'none',
        color: 'rgb(92, 151, 191)',
      }
    },
    contentHeader: {
      borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
      marginBottom: '16px',
      marginTop: '24px'
    }
  }))
};