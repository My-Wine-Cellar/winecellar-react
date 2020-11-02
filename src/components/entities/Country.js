import React from "react";
import Paper from "@material-ui/core/Paper";
import EntityHeader from "./EntityHeader";
import {useCountryGet} from "../hooks/entityHooks";

export const Country = (props) => {
    const country = useCountryGet(props);

    const cntry = country.map(country => {
        return (
            <>
                <EntityHeader
                    key={country.id}
                    name={country.name}
                    weblink={country.weblink}
                    description={country.description}
                    flag={country.flag}
                    id={country.id}
                    entity={"country"}
                    data={country}
                />
            </>
        )
    })

    return (
        <>
            <Paper elevation={8}>
                {cntry}
            </Paper>
            <br/>
        </>
    );
}
