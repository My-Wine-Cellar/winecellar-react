import React from "react";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Grid} from "@material-ui/core";
import {faClipboard, faStar, faWineBottle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 20,
    },
    pos: {
        marginBottom: 12,
    },
});

export const Welcome = () => {

    const classes = useStyles();

    return (
        <>
            <Grid item={"xs"}>
                <Paper className={classes.paper}>
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography className={classes.title}>
                                Welcome to MyWineCellar.info
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                MyWineCellar.info is an open source application that keeps track of your wines, their
                                reviews and tasting notes.
                            </Typography>
                            <Typography variant="body2" component="p">
                                See contact us for contact information.
                            </Typography>
                        </CardContent>
                    </Card>
                </Paper>
            </Grid>
            <br/>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={classes.paper}>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    <FontAwesomeIcon icon={faWineBottle}/>&nbsp;Cellar
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    Store your wines and know when to drink it!
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Plenty of ways to store and locate
                                </Typography>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    <FontAwesomeIcon icon={faStar}/>&nbsp;Ratings
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    Rate wines so you know what to drink next...
                                </Typography>
                                <Typography variant="body2" component="p">
                                    or NOT if its bad!
                                </Typography>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    <FontAwesomeIcon icon={faClipboard}/>&nbsp;Tasting Notes
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    Take notes so you can refer back to them.
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Also feel free to wishlist wines for future tastings.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}
