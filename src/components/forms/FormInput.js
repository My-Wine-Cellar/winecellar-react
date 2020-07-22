import React from "react";

const FormInput = ({label, name, type, value, placeholder, disabled, error}) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                disabled={disabled}
                className='form-control'
                style={error && {border: 'solid 1px red'}}
            />
            {error && <p>{error}</p>}
        </div>
    )
}
export default FormInput;