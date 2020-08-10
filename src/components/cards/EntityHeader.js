import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import EntityEditDialog from "../forms/EntityEditDialog";

const EntityHeader = (props) => {
    return (
        <>
            <Grid>
                <Typography variant={"h5"}>{props.name}</Typography>
                <p>Weblink: {props.weblink}</p>
                <p>Description: {props.description}</p>
                <div>
                    <EntityEditDialog
                        entity={props.entity}
                        id={props.id}
                        name={props.name}
                        weblink={props.weblink}
                        description={props.description}
                        data={props.data}
                    />
                </div>
            </Grid>
        </>
    )
}
export default EntityHeader;
