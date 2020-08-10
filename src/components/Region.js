import React from "react";
import {Link} from "react-router-dom";
import EntityHeader from "./cards/EntityHeader";
import EntityList from "./cards/EntityList";
import {useRegionByKeyGet, useRegionGet} from "./hooks/entityHooks";
import {makeStyles} from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const Region = (props) => {
    const classes = useStyles();

    const {region, area} = useRegionGet(props)
    const data = useRegionByKeyGet(props)

    const rgn = region.map(region => {
        return (
            <EntityHeader
                key={region.region.id}
                name={region.region.name}
                weblink={region.region.weblink}
                description={region.region.description}
                id={region.region.id}
                entity={"region"}
                data={data}
            />
        )
    })

    const areaList = area.map(areas => {
        return (
            <h5 className="card-header" key={areas.area.id}>
                <Link to={`/d/` + props.match.params.countryKey + "/" +
                props.match.params.regionKey + `/${areas.area.key}`}>{areas.area.name}</Link>
            </h5>
        )
    })

    return (
        <Paper className={classes.paper} elevation={24}>
            {rgn}
            <EntityList list={areaList} listName='Areas'/>
        </Paper>
    );
}

export default Region;
