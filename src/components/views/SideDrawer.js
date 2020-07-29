import React from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArchive, faClipboard, faGift, faGlobe, faStar, faUser, faWineBottle} from "@fortawesome/free-solid-svg-icons";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function SideDrawer() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            {/*<CssBaseline/>*/}
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <ListItem
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon/>
                    </ListItem>
                    <Typography className={classes.root}>
                        <Link href={"/"} color="inherit">
                            {'MyWineCellar'}
                        </Link>
                    </Typography>
                    <IconButton>
                        <Link href={"/d"} color={"inherit"}><FontAwesomeIcon icon={faGlobe}/></Link>
                    </IconButton>
                    <IconButton>
                        <FontAwesomeIcon icon={faUser}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <ListItem onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                    </ListItem>
                </div>
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faWineBottle}/>
                        </ListItemIcon>
                        <ListItemText primary={"Cellar"}/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faStar}/>
                        </ListItemIcon>
                        <ListItemText primary={"Reviews"}/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faGift}/>
                        </ListItemIcon>
                        <ListItemText primary={"Wishlist"}/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faClipboard}/>
                        </ListItemIcon>
                        <ListItemText primary={"Tasting notes"}/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faArchive}/>
                        </ListItemIcon>
                        <ListItemText primary={"Tasted wines"}/>
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
}
