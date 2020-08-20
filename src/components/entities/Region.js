import React from "react";
import Paper from "@material-ui/core/Paper";
import EntityHeader from "./EntityHeader";
import {useRegionGet} from "../hooks/entityHooks";

export const Region = (props) => {
    const region = useRegionGet(props)

    const rgn = region.map(region => {
        return (
            <EntityHeader
                key={region.id}
                name={region.name}
                weblink={region.weblink}
                description={region.description}
                id={region.id}
                entity={"region"}
                data={region}
            />
        )
    })

    return (
        <>
            <Paper elevation={8}>
                {rgn}
            </Paper>
            <br/>
        </>
    );
}
