import React from "react";
import {Link} from "react-router-dom";
import EntityHeader from "./cards/EntityHeader";
import EntityList from "./cards/EntityList";
import {useCountryByKeyGet, useCountryGet} from "./hooks/entityHooks";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const Country = (props) => {
    const classes = useStyles();

    const {country, region} = useCountryGet(props);
    const data = useCountryByKeyGet(props);

    const cntry = country.map(country => {
        return (
            <>
                <EntityHeader
                    key={country.country.id}
                    name={country.country.name}
                    weblink={country.country.weblink}
                    description={country.country.description}
                    id={country.country.id}
                    entity={"country"}
                    data={data}
                />
            </>
        )
    })

    const regionList = region.map(regions => {
        return (
            <h5 className="card-header" key={regions.region.id}>
                <Link
                    to={'/d/' + props.match.params.countryKey + `/${regions.region.key}`}>{regions.region.name}</Link>
                <img src="" alt=""/>
            </h5>
        )
    })

    return (
        <Paper className={classes.paper}>
            {cntry}
            <EntityList list={regionList} listName='Regions'/>
        </Paper>
    );
}
export default Country;
