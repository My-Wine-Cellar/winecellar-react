import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Link from "@material-ui/core/Link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlobe, faUser} from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        }
    }),
);

export default function Navbar() {
    const classes = useStyles();

    // AppBar for unauthenticated users
    return (
        <AppBar position="fixed">
            <Toolbar>
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
    )
}
