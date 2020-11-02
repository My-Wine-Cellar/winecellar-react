import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.secondary.main, //don't keep this, but helps show how to apply from muiTheme
    },
}));

export default function EntityList({list, listName}) {
    const classes = useStyles();

    return (
        <>
            <Grid className={classes.grid}>
                <Paper className={classes.paper} elevation={8}>
                    <Typography variant={"h4"}>
                        {listName}
                    </Typography>
                    <List>
                        <Typography variant={"h6"}>
                            {list}
                        </Typography>
                    </List>
                </Paper>
            </Grid>
        </>
    )
}
