import React from "react";
import TextField from "@material-ui/core/TextField";

export default function FormInput(props) {

    const {name, label, value, onChange} = props;

    return (
        <>
            <TextField multiline margin="dense" fullWidth label={label} value={value}
                       onChange={onChange} name={name}
            />
        </>
    )
}
