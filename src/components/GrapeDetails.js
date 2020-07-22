import React, {useEffect, useState} from "react";
import Api from "./axios/Api";
import EntityCardHeader from "./cards/EntityCardHeader";

const GrapeDetails = (props) => {
    const [grape, setGrape] = useState([])

    useEffect(() => {
        Api.get('/grape/' + props.match.params.grapeKey)
            .then(response => setGrape(response.data.mywinecellar.grapes))
            .catch(error => console.log('Error: ', error))
    })

    const grp = grape.map(grape => {
        return (
            <EntityCardHeader key={grape.grape.id} name={grape.grape.name}/>
        )
    })

    return (
        <div className="container">
            <div className="card p-2 shadow">
                <div className="container">
                    <div className="card shadow p-4 m-3">
                        {grp}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GrapeDetails;