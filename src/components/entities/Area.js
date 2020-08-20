import React from "react";
import EntityHeader from "./EntityHeader";
import {useAreaGet} from "../hooks/entityHooks";
import Paper from "@material-ui/core/Paper";

export const Area = (props) => {
    const area = useAreaGet(props)

    const ar = area.map(area => {
        return (
            <EntityHeader
                key={area.id}
                name={area.name}
                weblink={area.weblink}
                description={area.description}
                id={area.id}
                entity={"area"}
                data={area}
            />
        )
    })

    return (
        <>
            <Paper elevation={8}>
                {ar}
            </Paper>
            <br/>
        </>
    );
}
