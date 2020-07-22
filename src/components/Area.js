import React, {useEffect, useState} from "react";
import Api from "./axios/Api";
import {Link} from "react-router-dom";
import EntityCardHeader from "./cards/EntityCardHeader";
import EntityCardList from "./cards/EntityCardList";

const Area = (props) => {
    const [area, setArea] = useState([]);
    const [producer, setProducer] = useState([]);
    const [grape, setGrape] = useState([]);

    useEffect(() => {
        Api.get('/' + props.match.params.countryKey + '/' + props.match.params.regionKey + '/' + props.match.params.areaKey)
            .then(response => {
                setArea(response.data.mywinecellar.areas)
                setProducer(response.data.mywinecellar.producers)
                setGrape(response.data.mywinecellar.grapes)
            }).catch(error => console.log('Error: ', error))
    }, [])

    const ar = area.map(area => {
        return (
            <EntityCardHeader key={area.area.id} name={area.area.name}/>
        )
    })

    const producerList = producer.map(producer => {
        return (
            <h5 className="card-header" key={producer.producer.id}>
                <Link to={`/d/` + props.match.params.countryKey + "/" +
                props.match.params.regionKey + "/" + props.match.params.areaKey +
                `/${producer.producer.key}`}>{producer.producer.name}</Link>
            </h5>
        )
    })

    const grapeList = grape.map(grape => {
        return (
            <h5 className="card-header" key={grape.grape.id}>
                <Link to={`/grape/${grape.grape.key}`}>{grape.grape.name}</Link>
            </h5>
        )
    })

    return (
        <div className="container justify-content-center">
            {ar}
            <h3 align="center">Producers</h3>
            <EntityCardList list={producerList}/>
            <h3 align="center">Grapes</h3>
            <EntityCardList list={grapeList}/>
            {/* TODO add grape button here*/}
        </div>
    );
}
export default Area;