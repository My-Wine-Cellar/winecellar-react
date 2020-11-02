import React from "react";
import Paper from "@material-ui/core/Paper";
import EntityHeader from "./EntityHeader";
import {useGrapeGet} from "../hooks/entityHooks";

export const Grape = (props) => {
    const grape = useGrapeGet(props);

    const grp = grape.map(grape => {
        return (
            <EntityHeader
                key={grape.id}
                name={grape.name}
                weblink={grape.weblink}
                description={grape.description}
                id={grape.id}
                entity={"grape"}
                data={grape}
            />
        )
    })

    return (
        <Paper elevation={8}>
            {grp}
        </Paper>
    )
}
