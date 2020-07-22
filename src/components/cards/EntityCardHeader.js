import React from "react";

const EntityCardHeader = (props) => {
    return (
        <>
            <div className="card text-center">
                <div className="card-body">
                    <h2 className="card-header">{props.name}</h2>
                </div>
            </div>
        </>
    )
}
export default EntityCardHeader;