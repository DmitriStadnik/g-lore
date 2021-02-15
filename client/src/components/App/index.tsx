import React, {useEffect, useState} from 'react';
import {Link as RouterLink, useLocation} from 'react-router-dom';
import clsx from 'clsx';
import {useTheme} from '@material-ui/core/styles';
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
import {useStyles} from "./styles";

const drawerWidth = 320;

const App = () => {

  const theme = useTheme();
  const classes = useStyles(drawerWidth)(theme);
  const [open, setOpen] = useState(window.innerWidth >= 600);
  const [title, setTitle] = useState(mainPage.title);
  const [content, setContent] = useState<Array<any>>();
  const location = useLocation();

  useEffect(() => {
    window.scroll({
      top: 0
    });

    if (location.pathname === '/') {
      setTitle(mainPage.title)
      setContent(mainPage.content)
      document.title = `${mainPage.title} - Говнолор`
      return;
    }

    const routeArr = location.pathname.split('/');
    const currentParent = data.find(e => transliterateRus(e.title) === `${routeArr[1]}`);
    const currentChild = currentParent && currentParent.children && currentParent.children.find(e => transliterateRus(e.title) === `${routeArr[2]}`);

    if (currentChild !== undefined) {
      setTitle(currentChild.title);
      setContent(currentChild.content);
      document.title = `${currentChild.title} - Говнолор`
    }
  }, [location])

  const isLinkActive = (path: string) => {
    if (location.pathname === path) return 'content_link--active';

    return ''
  }

  const parseContent = (item: string) => {
    return parse(item, {
      replace: domNode => {
        if (!domNode.name || !domNode.children) return;

        if (domNode.name === 'a') {
          if (domNode.attribs && domNode.attribs.href) {
            return React.createElement(
              RouterLink,
              {to: domNode.attribs.href, className: classes.contentLink},
              domNode.children[0].data
            );
          }
        }

        if (domNode.name === 'h6') {
          return React.createElement(
            Typography,
            {variant: 'h6', className: classes.contentHeader},
            domNode.children[0].data
          );
        }

        return;
      }
    })
  }

  const createTextElement = (index: number, item: string) => {
    const children = parseContent(item);

    if (item.indexOf('<h6>') >= 0) {
      return (
        <React.Fragment key={index}>{children}</React.Fragment>
      )
    }

    return (
      <Typography paragraph key={index}>
        {children}
      </Typography>
    )
  }

  const handleLinkClick = () => {
    if (window.innerWidth < 600) {
      setOpen(false);
    }
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline/>
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
            <MenuIcon/>
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
          <Typography variant="h6" className={classes.drawerHeaderText} noWrap>Говнолор</Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
          </IconButton>
        </div>
        <Divider/>
        <List className={`${classes.accordionList} ${classes.mainPageButton}`}>
          <ListItem button key={mainPage.title} className={classes.accordionListItem}>
            <Link
              component={RouterLink}
              to='/'
              className={`${classes.link} ${isLinkActive(`/`)}`}
              onClick={handleLinkClick}
            >
              <ListItemText primary={mainPage.title} className={classes.linkTextMain}/>
            </Link>
          </ListItem>
        </List>

        {data && data.map((parent, index) => (
          <Accordion key={`${transliterateRus(parent.title)}-dropdown`} className='custom_accordion'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon/>}
              aria-controls={`${transliterateRus(parent.title)}-content`}
              id={`${transliterateRus(parent.title)}-header`}
            >
              <Typography>{parent.title}</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails}>
              <List className={classes.accordionList}>
                {parent.children && parent.children.map((child, index) => (
                  <ListItem button key={`${transliterateRus(child.title)}`} className={classes.accordionListItem}>
                    <Link
                      component={RouterLink}
                      to={`/${transliterateRus(parent.title)}/${transliterateRus(child.title)}`}
                      className={`${classes.link} ${isLinkActive(`/${transliterateRus(parent.title)}/${transliterateRus(child.title)}`)}`}
                      onClick={handleLinkClick}
                    >
                      <ListItemText primary={child.title} className={classes.linkText}/>
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
        <div className={classes.drawerHeader}/>
        <div className='content_wrapper'>
          {content && content.map((item, index) => {
            return createTextElement(index, item)
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
