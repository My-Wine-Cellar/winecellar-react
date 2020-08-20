import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Api from "../axios/Api";
import Paper from "@material-ui/core/Paper";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {IconButton} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Grid from "@material-ui/core/Grid";
import FormInput from "../forms/FormInput";
import DialogActions from "@material-ui/core/DialogActions";
import CancelIcon from "@material-ui/icons/Cancel";
import SaveIcon from "@material-ui/icons/Save";

export const Producer = (props) => {

    const [wine, setWine] = useState([])
    const [producer, setProducer] = useState([]);

    let producerId = producer.map(prdcr => prdcr.id)

    useEffect(() => {
        Api.get('/' + props.match.params.countryKey + '/' + props.match.params.regionKey + '/' +
            '/' + props.match.params.areaKey + '/' + props.match.params.producerKey)
            .then(response => {
                setProducer(response.data.mywinecellar.producers)
                setWine(response.data.mywinecellar.wines)
            }).catch(error => console.log("Error: ", error))
    }, [])

    const prdcr = producer.map(producer => {
        return (
            <>
                <CardContent>
                    <Typography gutterBottom variant={"h4"}>
                        {producer.name}
                    </Typography>
                    <Typography variant={"body1"} color={"textSecondary"}>
                        {producer.description}
                    </Typography><br/>
                    <TableContainer>
                        <Table>
                            <TableBody>
                                <Typography variant={"subtitle1"}>
                                    <TableRow>Phone:&nbsp;&nbsp;{producer.phone}</TableRow>
                                    <TableRow>Fax:&nbsp;&nbsp;{producer.fax}</TableRow>
                                    <TableRow>Email:&nbsp;&nbsp;{producer.email}</TableRow>
                                    <TableRow>Weblink:&nbsp;&nbsp;{producer.website}</TableRow>
                                </Typography>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </>
        )
    })

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [data, setData] = useState(wine);

    const handleChange = event => {
        const value = event.target.value;
        setData({
            ...data,
            [event.target.name]: value
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        Api.post('/wine/new?producerId=' + producerId, {
            name: data.name,
            vintage: data.vintage,
            size: data.size,
            weblink: data.weblink,
            description: data.description
        }).then(response => {
            console.log('Response: ', response)
            window.location.reload()
        }).catch(error => console.log('Error: ', error))
    };

    return (
        <>
            <Paper elevation={8}>
                {prdcr}
            </Paper>
            <br/>
            <Paper elevation={8}>
                <CardContent>
                    <Typography variant={"h5"}>Wines</Typography>
                    <Table size={"small"}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Wine</TableCell>
                                <TableCell>Vintage</TableCell>
                                <TableCell>Size&nbsp;(L)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {wine.map(wn => (
                                <TableRow hover={true} key={wn.id}>

                                    <TableCell>
                                        <Link to={`/d/` + props.match.params.countryKey + `/` +
                                        props.match.params.regionKey + `/` + props.match.params.areaKey + `/` +
                                        props.match.params.producerKey + `/${wn.key}` +
                                        `/${wn.vintage}` + `/${wn.size}`}>{wn.name}</Link>
                                    </TableCell>

                                    <TableCell>{wn.vintage}</TableCell>
                                    <TableCell>{wn.size}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Paper>
            <IconButton onClick={handleClickOpen} color={"primary"}>
                <AddCircleIcon/>
            </IconButton>
            <br/>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle color={"primary"} id="form-dialog-title">Adding a new Wine</DialogTitle>
                <DialogContent>
                    <DialogContentText color={"secondary"}>
                        Name, vintage, and size is are requried on this form.
                    </DialogContentText>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <FormInput label={"Name"} name={"name"} value={data.name}
                                           onChange={handleChange}/>
                            </Grid>
                            <Grid item xs={6}>
                                <FormInput label={"Vintage"} name={"vintage"} value={data.vintage}
                                           onChange={handleChange}/>
                                <FormInput label={"Size"} name={"size"} value={data.size}
                                           onChange={handleChange}/>
                            </Grid>
                            <Grid item xs={6}>
                                <FormInput label={"Weblink"} name={"weblink"} value={data.weblink}
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
