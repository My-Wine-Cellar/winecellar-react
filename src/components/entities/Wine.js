import React, {useEffect, useState} from "react";
import Api from "../axios/Api";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import Divider from "@material-ui/core/Divider";

export const Wine = (props) => {

    const [wine, setWine] = useState([])
    const [closure, setClosure] = useState([])
    const [color, setColor] = useState([])
    const [shape, setShape] = useState([])
    const [type, setType] = useState([])

    useEffect(() => {
        Api.get('/' + props.match.params.countryKey + '/' + props.match.params.regionKey + '/' +
            props.match.params.areaKey + '/' + props.match.params.producerKey + '/' +
            props.match.params.wineKey + '/' + props.match.params.vintage + '/' + props.match.params.size)
            .then(response => {
                setWine(response.data.mywinecellar.wines)
                setClosure(response.data.mywinecellar.closures)
                setColor(response.data.mywinecellar.colors)
                setShape(response.data.mywinecellar.shapes)
                setType(response.data.mywinecellar.types)
            }).catch(error => console.log('Error: ', error))
    }, [])

    const wn = wine.map(wine => {
        return (
            <>
                <CardContent>
                    <Typography gutterBottom variant={"h5"}>
                        {wine.name}
                    </Typography>
                    <Typography variant={"body1"} color={"textSecondary"}>
                        {wine.description}
                    </Typography><br/>
                    <TableContainer>
                        <Table>
                            <TableBody>
                                <Typography variant={"subtitle1"}>
                                    <TableRow>Vintage:&nbsp;&nbsp;{wine.vintage}</TableRow>
                                    <TableRow>Size:&nbsp;&nbsp;{wine.size}</TableRow>
                                    <Divider/>
                                    <TableRow>Alcohol:&nbsp;&nbsp;{wine.alcohol}%</TableRow>
                                    <TableRow>Phone:&nbsp;&nbsp;{wine.phone}</TableRow>
                                    <TableRow>Fax:&nbsp;&nbsp;{wine.fax}</TableRow>
                                    <TableRow>Email:&nbsp;&nbsp;{wine.email}</TableRow>
                                    <TableRow>Weblink:&nbsp;&nbsp;{wine.weblink}</TableRow>
                                </Typography>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </>
        )
    })

    const clsr = closure.map(closure => {
        return (
            <div key={closure.id}>
                <Typography>Closure: {closure.name}</Typography>
            </div>
        )
    })
    const clr = color.map(color => {
        return (
            <div key={color.id}>
                <Typography>Color: {color.name}</Typography>
            </div>
        )
    })
    const shp = shape.map(shape => {
        return (
            <div key={shape.id}>
                <Typography>Shape: {shape.name}</Typography>
            </div>
        )
    })
    const typ = type.map(type => {
        return (
            <div key={type.id}>
                <Typography>Type: {type.name}</Typography>
            </div>
        )
    })

    return (
        <>
            <Paper elevation={8}>
                {wn}
                <CardContent>
                    {clsr}
                    {clr}
                    {shp}
                    {typ}
                </CardContent>

            </Paper>
        </>
    )
}
