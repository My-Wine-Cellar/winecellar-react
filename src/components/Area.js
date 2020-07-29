import React from "react";
import {Link} from "react-router-dom";
import EntityHeader from "./cards/EntityHeader";
import EntityList from "./cards/EntityList";
import {useAreaByKeyGet, useAreaGet} from "./hooks/entityHooks";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const Area = (props) => {
    const classes = useStyles();

    const {area, producer, grape} = useAreaGet(props)
    const data = useAreaByKeyGet(props)

    const ar = area.map(area => {
        return (
            <EntityHeader
                key={area.area.id}
                name={area.area.name}
                weblink={area.area.weblink}
                description={area.area.description}
                id={area.area.id}
                entity={"area"}
                data={data}
            />
        )
    })

    const producerList = producer.map(producer => {
        return (
            <h5 className="card-header" key={producer.producer.id}>
                <Link to={`/d/` + props.match.params.countryKey + "/" +
                props.match.params.regionKey + "/" + props.match.params.areaKey +
                `/${producer.producer.key}`}>{producer.producer.name}</Link>
            </h5>
        )
    })

    const grapeList = grape.map(grape => {
        return (
            <h5 className="card-header" key={grape.grape.id}>
                <Link to={`/grape/${grape.grape.key}`}>{grape.grape.name}</Link>
            </h5>
        )
    })

    return (
        <Paper className={classes.paper} elevation={7}>
            {ar}
            <EntityList list={producerList} listName={'Producers'}/>
            {/* TODO add producer button here*/}
            <EntityList list={grapeList} listName={'Grapes'}/>
            {/* TODO add grape button here*/}
        </Paper>
    );
}
export default Area;
