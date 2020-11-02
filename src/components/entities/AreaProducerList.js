import React, {useState} from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import Api from "../axios/Api";
import FormInput from "../forms/FormInput";
import {useProducerByAreaGet} from "../hooks/entityHooks";
import EntityList from "./EntityList";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import {IconButton} from "@material-ui/core";

export const AreaProducerList = (props) => {

    const [producer, area] = useProducerByAreaGet(props)
    let areaId = area.map(area => area.id)

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [data, setData] = useState(producer);

    const handleChange = event => {
        const value = event.target.value;
        setData({
            ...data,
            [event.target.name]: value
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        Api.post('/area/' + areaId + '/add-producer', {
            name: data.name,
            phone: data.phone,
            fax: data.fax,
            email: data.email,
            website: data.website,
            description: data.description
        }).then(response => {
            console.log('Response: ', response)
            window.location.reload()
        }).catch(error => console.log('Error: ', error))
    };

    const producerList = producer.map(producer => {
        return (
            <div key={producer.id}>
                <Link to={`/d/` + props.match.params.countryKey + "/" +
                props.match.params.regionKey + "/" + props.match.params.areaKey +
                `/${producer.key}`}>{producer.name}</Link>
            </div>
        )
    })

    return (
        <>
            <EntityList list={producerList} listName={'Producers'}/>

            <IconButton onClick={handleClickOpen} color={"primary"}>
                <AddCircleIcon/>
            </IconButton>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle color={"primary"} id="form-dialog-title">Adding a new Producer:</DialogTitle>
                <DialogContent>
                    <DialogContentText color={"secondary"}>
                        Name is the only required field on this form.
                    </DialogContentText>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <FormInput label={"Name"} name={"name"} value={data.name}
                                           onChange={handleChange}/>
                            </Grid>
                            <Grid item xs={6}>
                                <FormInput label={"Phone"} name={"phone"} value={data.phone}
                                           onChange={handleChange}/>
                                <FormInput label={"Fax"} name={"fax"} value={data.fax}
                                           onChange={handleChange}/>
                            </Grid>
                            <Grid item xs={6}>
                                <FormInput label={"Email"} name={"email"} value={data.email}
                                           onChange={handleChange}/>
                                <FormInput label={"Website"} name={"website"} value={data.website}
                                           onChange={handleChange}/>
                            </Grid>
                            <Grid item xs={12}>
                                <FormInput multi={true} label={"Description"} name={"description"}
                                           value={data.description}
                                           onChange={handleChange}/>
                            </Grid>
                            <Grid item xs={12}>
                                <DialogActions>
                                    <IconButton onClick={handleClose} color={"secondary"}>
                                        <CancelIcon/>
                                    </IconButton>
                                    <IconButton type={"submit"} onClick={handleClose} color={"secondary"}>
                                        <SaveIcon/>
                                    </IconButton>
                                </DialogActions>
                            </Grid>
                        </Grid>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}
