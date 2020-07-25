import React, {useEffect, useState} from "react";
import Api from "./axios/Api";
import {Link} from "react-router-dom";
import EntityCardList from "./cards/EntityCardList";

const Grape = () => {
    const [red, setRed] = useState([]);
    const [white, setWhite] = useState([]);

    useEffect(() => {
        Api.get('/grape/red')
            .then(response => {
                setRed(response.data.mywinecellar.grapes)
            }).catch(error => console.log('Error: ', error))
        Api.get('/grape/white')
            .then(response => {
                setWhite(response.data.mywinecellar.grapes)
            }).catch(error => console.log('Error: ', error))
    }, [])

    const redGrapes = red.map(red => {
        return (
            <h5 className="card-header" key={red.grape.id}>
                <Link to={`/grape/${red.grape.key}`}>{red.grape.name}</Link>
            </h5>
        )
    })
    const whiteGrapes = white.map(white => {
        return (
            <h5 className="card-header" key={white.grape.key}>
                <Link to={`/grape/${white.grape.key}`}>{white.grape.name}</Link>
            </h5>
        )
    })

    return (
        <div className="container">
            <div className="card shadow">
                <div className="row p-3">
                    <div className="col-sm">
                        <EntityCardList list={redGrapes} listName='Red Grapes'/>
                    </div>
                    <div className="col-sm">
                        <EntityCardList list={whiteGrapes} listName='White Grapes'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Grape;