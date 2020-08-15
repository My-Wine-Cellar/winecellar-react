import React, {useState} from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Api from "../axios/Api";
import Button from "@material-ui/core/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import FormInput from "../forms/FormInput";
import DialogActions from "@material-ui/core/DialogActions";

const EntityHeader = (props) => {
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
            weblink: props.weblink,
            description: props.description
        }).then(response => {
            console.log('Response: ', response)
            window.location.reload()
        }).catch(error => console.log('Error: ', error))
    };

    return (
        <>
            <Grid>
                <Typography variant={"h5"}>{props.name}</Typography>
                {img}
                <p>Weblink: {props.weblink}</p>
                <p>Description: {props.description}</p>
                <div>
                    <Button onClick={handleClickOpen}>
                        <FontAwesomeIcon icon={faEdit}/>
                    </Button>
                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Edit: {props.name}</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                We are attempting to edit an entity of our choosing...
                            </DialogContentText>
                            <form autoComplete={"off"} onSubmit={handleSubmit}>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <FormInput label={"Weblink"} name={"weblink"} value={data.weblink}
                                                   onChange={handleChange}/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormInput label={"Description"} name={"description"} value={data.description}
                                                   onChange={handleChange}/>
                                    </Grid>
                                </Grid>
                                <DialogActions>
                                    <Button onClick={handleClose} color="primary">
                                        Cancel
                                    </Button>
                                    <Button type={"submit"} onClick={handleClose} color="primary">
                                        Save
                                    </Button>
                                </DialogActions>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </Grid>
        </>
    )
}
export default EntityHeader;
