import React, {useEffect, useState} from 'react';
import {Link as RouterLink, useLocation} from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';
import {AccordionDetails} from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import parse from 'html-react-parser';
import {data, mainPage} from '../../data';
import {transliterateRus} from "../../utils";
import './styles.css';

const drawerWidth = 320;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: 'calc(100% - 64px)'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
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
    justifyContent: 'flex-end',
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
  },
  accordionListItem: {
    padding: '0',
  },
  link: {
    color: theme.palette.text.primary,
    display: 'block',
    height: '100%',
    width: '100%',
    padding: '0',
    '&:hover': {
      textDecoration: 'none',
      color: theme.palette.primary.dark,
    }
  },
  linkText: {
    '& span': {
      fontSize: 13,
      padding: theme.spacing(0, 3),
    }
  },
  linkTextMain: {
    '& span': {
      fontSize: 14,
      padding: theme.spacing(1, 2),
    }
  }
}));

const App = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(window.innerWidth > 600);
  const [title, setTitle] = useState(mainPage.title);
  const [content, setContent] = useState<Array<any>>();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setTitle(mainPage.title)
      setContent(mainPage.content)
    } else {
      const routeArr = location.pathname.split('/');
      const currentParent = data.find(e => transliterateRus(e.title) === `${routeArr[1]}`);
      const currentChild = currentParent && currentParent.children && currentParent.children.find(e => transliterateRus(e.title) === `${routeArr[2]}`);

      if (currentChild !== undefined) {
        setTitle(currentChild.title);
        setContent(currentChild.content);
      }
    }
  }, [location])

  const parseContent = (item: string) => {
    return parse(item, {
      replace: domNode => {
        if (domNode.name && domNode.name === 'a') {
          if (domNode.attribs && domNode.attribs.href) {
            return React.createElement(
              RouterLink,
              {to: domNode.attribs.href},
              domNode.children && domNode.children[0].data
            );
          }
        } else if (domNode.name && domNode.name === 'h6') {
          return React.createElement(
            Typography,
            {variant: 'h6'},
            domNode.children && domNode.children[0].data
          );
        }
      }
    })
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List className={classes.accordionList}>
          <ListItem button key={mainPage.title} className={classes.accordionListItem}>
            <Link component={RouterLink} to='/' className={classes.link}>
              <ListItemText primary={mainPage.title} className={classes.linkTextMain} />
            </Link>
          </ListItem>
        </List>

        {data && data.map((parent, index) => (
          <Accordion key={`${transliterateRus(parent.title)}-dropdown`} className='custom_accordion'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${transliterateRus(parent.title)}-content`}
              id={`${transliterateRus(parent.title)}-header`}
            >
              <Typography>{parent.title}</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails}>
              <List className={classes.accordionList}>
                {parent.children && parent.children.map((child, index) => (
                  <ListItem button key={`${transliterateRus(child.title)}`} className={classes.accordionListItem}>
                    <Link component={RouterLink} to={`/${transliterateRus(parent.title)}/${transliterateRus(child.title)}`} className={classes.link}>
                      <ListItemText primary={child.title} className={classes.linkText} />
                    </Link>
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        ))}
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <div className='content_wrapper'>
          {content && content.map((item, index) => (
            <Typography paragraph key={index}>
              {parseContent(item)}
            </Typography>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
