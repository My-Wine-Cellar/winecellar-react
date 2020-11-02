import React from "react";
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import EntityList from "./EntityList";
import {useGrapeRedGet, useGrapeWhiteGet} from "../hooks/entityHooks";

export const Grapes = () => {
    const red = useGrapeRedGet();
    const white = useGrapeWhiteGet();

    const redGrapes = red.map(red => {
        return (
            <div key={red.id}>
                <Link to={`/grape/${red.key}`}>{red.name}</Link>
            </div>
        )
    })

    const whiteGrapes = white.map(white => {
        return (
            <div key={white.key}>
                <Link to={`/grape/${white.key}`}>{white.name}</Link>
            </div>
        )
    })

    return (
        <>
            <Grid container spacing={4}>
                <Grid item xs={6}>
                    <EntityList list={redGrapes} listName='Red Grapes'/>
                </Grid>
                <Grid item xs={6}>
                    <EntityList list={whiteGrapes} listName='White Grapes'/>
                </Grid>
            </Grid>
        </>
    )
}
