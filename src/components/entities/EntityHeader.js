import React, {useState} from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Api from "../axios/Api";
import EditIcon from '@material-ui/icons/Edit';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import FormInput from "../forms/FormInput";
import DialogActions from "@material-ui/core/DialogActions";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {IconButton} from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
    },
}));

export default function EntityHeader(props) {
    const classes = useStyles();

    let img;

    if (props.entity === "country") {
        img = <img src={require('../../resources/images/flags/' + props.flag + '.png')} alt={props.name}/>
    }

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [data, setData] = useState(props.data);

    const handleChange = event => {
        const value = event.target.value;
        setData({
            ...data,
            [event.target.name]: value
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        Api.put('/' + props.entity + '/' + props.id + '/edit', {
            weblink: data.weblink,
            description: data.description
        }).then(response => {
            console.log('Response: ', response)
            window.location.reload() //TODO: remove and figure out how to update component on state change
        }).catch(error => console.log('Error: ', error))
    };

    return (
        <>
            <Grid className={classes.paper}>
                <Typography variant={"h4"} color={"secondary"}>{props.name}</Typography>
                {img}
                <Typography variant={"subtitle1"} align={"left"}>{props.description}</Typography>
                <Typography variant={"subtitle1"} align={"left"}>{props.weblink}</Typography>

                <IconButton onClick={handleClickOpen} color={"primary"}>
                    <EditIcon/>
                </IconButton>
            </Grid>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit: {props.name}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        We are attempting to edit an entity of our choosing...
                    </DialogContentText>
                    <form autoComplete={"off"} onSubmit={handleSubmit}>
                        <Grid container>
                            <Grid item xs={12}>
                                <FormInput label={"Description"} name={"description"} value={data.description}
                                           onChange={handleChange}/>
                            </Grid>
                            <Grid item xs={12}>
                                <FormInput label={"Weblink"} name={"weblink"} value={data.weblink}
                                           onChange={handleChange}/>
                            </Grid>
                        </Grid>
                        <DialogActions>
                            <IconButton onClick={handleClose} color={"secondary"}>
                                <CancelIcon/>
                            </IconButton>
                            <IconButton type={"submit"} onClick={handleClose} color={"secondary"}>
                                <SaveIcon/>
                            </IconButton>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}
