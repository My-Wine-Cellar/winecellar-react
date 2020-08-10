import React, {useEffect, useState} from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import {Grid} from "@material-ui/core";
import FormInput from "./FormInput";
import Api from "../axios/Api";

export default function EntityEditDialog(props) {
    const [open, setOpen] = React.useState(false);

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
            // TODO need to fix this so our component reloads
            //props.history.push('/d/' + response.data.mywinecellar.countries.map(country => country.country.key))
        }).catch(error => console.log('Error: ', error))
        //setOpen(false);
    };

    return (
        <div>
            <Button onClick={handleClickOpen}>
                <FontAwesomeIcon icon={faEdit}/>
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit: {props.name}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        We are attempting to edit an entity of our choosing...
                        Probably need to use grid/container/paper here to format
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
    );
}
