import React from "react";
import {Link} from "react-router-dom";
import EntityList from "./cards/EntityList";
import {useGrapeRedGet, useGrapeWhiteGet} from "./hooks/entityHooks";

const Grapes = () => {
    const red = useGrapeRedGet();
    const white = useGrapeWhiteGet();

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
                        <EntityList list={redGrapes} listName='Red Grapes'/>
                    </div>
                    <div className="col-sm">
                        <EntityList list={whiteGrapes} listName='White Grapes'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Grapes;
