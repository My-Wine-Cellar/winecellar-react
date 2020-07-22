import React from "react";

const EntityCardList = ({list, listName}) => {
    return (
        <>
            <div className="container">
                <div className="card p-2 shadow">
                    <div className="container justify-content-center">
                        <br/>
                        <h2 align="center">{listName}</h2>
                        <br/>
                        <div className="card text-center">
                            <div className="card-body p-1">
                                {list}
                            </div>
                        </div>
                        <br/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EntityCardList;