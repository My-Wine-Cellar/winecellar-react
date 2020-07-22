import React from "react";

const FormTextArea = ({label, name, value, onChange, error}) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <textarea
                id={name}
                name={name}
                value={value}
                rows='5'
                onChange={onChange}
                className='form-control'
                style={error && {border: 'solid 1px red'}}
            />
            {error && <p>{error}</p>}
        </div>
    )
}
export default FormTextArea;