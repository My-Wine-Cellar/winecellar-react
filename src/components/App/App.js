import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import SideDrawer from "../views/SideDrawer";
import {Routes} from "./Routes";
import Tooltip from "@material-ui/core/Tooltip";
import Navbar from "../views/Navbar";

// applies to the entire app, overrides defaults
const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#393f4d", //silver fox?
        },
        secondary: {
            main: "#B11227", //wine red
        },
        background: {
            default: "#f4f5fd"
        },
    },
    overrides: {
        MuiSvgIcon: {
            root: {
                //color: "#B11227",
                // '&:hover': {
                //     backgroundColor: "#a59d9d"
                // }
            }
        }
    }
})

// applies to this file/function
const useStyles = makeStyles({
    appMain: {
        paddingTop: '100px',
        paddingLeft: '220px',
        paddingRight: '220px',
        paddingBottom: '100px',
        width: '100%',
    },
    fab: {
        position: 'fixed',
        bottom: '16px',
    },
})

// app's entry point, 'main method'
// we want this to represent the bulk of the app, make it as SPA like as we can
// remove as many Routes as possible
function App() {
    const classes = useStyles();

    return (
        <>
            <ThemeProvider theme={theme}>
                <Navbar/>
                <SideDrawer/>
                <div className={classes.appMain}>
                    <Routes/>
                </div>
                {/*<Grid container direction={"row"} justify={"center"} alignItems={"center"}>*/}
                {/*    <Tooltip title={"Add Wine"} aria-label={"add"} placement={"top"} arrow>*/}
                {/*        <Fab className={classes.fab} color={"secondary"} aria-label={"add"}>*/}
                {/*            <AddIcon/>*/}
                {/*        </Fab>*/}
                {/*    </Tooltip>*/}
                {/*</Grid>*/}
                <CssBaseline/>
            </ThemeProvider>
        </>
    );
}

export default App;
