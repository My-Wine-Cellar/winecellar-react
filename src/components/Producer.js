import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Api from "./axios/Api";
import EntityCardHeader from "./cards/EntityCardHeader";

const Producer = (props) => {
    const [wine, setWine] = useState([])
    const [producer, setProducer] = useState([]);

    useEffect(() => {
        Api.get('/' + props.match.params.countryKey + '/' + props.match.params.regionKey + '/' +
            '/' + props.match.params.areaKey + '/' + props.match.params.producerKey)
            .then(response => {
                setProducer(response.data.mywinecellar.producers)
                setWine(response.data.mywinecellar.wines)
            }).catch(error => console.log("Error: ", error))
    })

    const prdcr = producer.map(producer => {
        return (
            <div>
                <EntityCardHeader key={producer.producer.id} name={producer.producer.name}/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 mt-3">
                            <div className="card">
                                <div className="card-horizontal">
                                    <div className="img-square-wrapper p-2">
                                        <img src={'data:image/jpeg;charset=utf-8;base64,' + producer.producer.image}
                                             alt={producer.producer.description} height="150" width="150"/>
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">Description</p>
                                        <table className="table table-hover">
                                            <tbody>
                                            <tr>
                                                <td><b>Phone</b></td>
                                                <td>{producer.producer.phone}</td>
                                            </tr>
                                            <tr>
                                                <td><b>Fax</b></td>
                                                <td>{producer.producer.fax}</td>
                                            </tr>
                                            <tr>
                                                <td><b>Email</b></td>
                                                <td><a href="">
                                                    <div>{producer.producer.email}</div>
                                                </a></td>
                                            </tr>
                                            <tr>
                                                <td><b>Web</b></td>
                                                <td><a href="" target="_blank">
                                                    <div>{producer.producer.weblink}</div>
                                                </a></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                </div>
            </div>
        )
    })

    const wn = wine.map(wine => {
        return (
            <div>
                <div className="container">
                    <table className="table table-hover table-sm">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Vintage</th>
                            <th>Size</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <Link to={`/d/` + props.match.params.countryKey + `/` +
                                props.match.params.regionKey + `/` + props.match.params.areaKey + `/` +
                                props.match.params.producerKey + `/${wine.wine.key}` +
                                `/${wine.wine.vintage}` + `/${wine.wine.size}`}>{wine.wine.name}</Link>
                            </td>
                            <td>{wine.wine.vintage}</td>
                            <td>{wine.wine.size}L</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    })
    return (
        <div className="container">
            <div className="card p-2 shadow">
                <div className="container justify-content-center">
                    {prdcr}
                </div>
                <h3 align="center">Wines</h3>
                {wn}
            </div>
        </div>
    )
}
export default Producer;