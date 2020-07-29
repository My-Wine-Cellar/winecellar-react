import React, {useEffect, useState} from "react";
import Api from "./axios/Api";
import EntityHeader from "./cards/EntityHeader";

const Wine = (props) => {
    const [wine, setWine] = useState([])
    const [closure, setClosure] = useState([])
    const [color, setColor] = useState([])
    const [shape, setShape] = useState([])
    const [type, setType] = useState([])

    useEffect(() => {
        Api.get('/' + props.match.params.countryKey + '/' + props.match.params.regionKey + '/' +
            props.match.params.areaKey + '/' + props.match.params.producerKey + '/' +
            props.match.params.wineKey + '/' + props.match.params.vintage + '/' + props.match.params.size)
            .then(response => {
                setWine(response.data.mywinecellar.wines)
                setClosure(response.data.mywinecellar.closures)
                setColor(response.data.mywinecellar.colors)
                setShape(response.data.mywinecellar.shapes)
                setType(response.data.mywinecellar.types)
            }).catch(error => console.log('Error: ', error))
    })

    const wn = wine.map(wine => {
        return (
            <div>
                <EntityHeader key={wine.wine.id} name={wine.wine.name}/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 mt-3">
                            <div className="card">
                                <div className="card-horizontal">
                                    <div className="img-square-wrapper p-2">
                                        <img src={'data:image/jpeg;charset=utf-8;base64,' + wine.wine.image}
                                             alt={wine.wine.description} height="150" width="150"/>
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">{wine.wine.description}</p>
                                        <table className="table table-hover">
                                            <tbody>
                                            <tr>
                                                <td><b>Producer</b></td>
                                                <td>
                                                    {/*<Link to={}></Link>*/}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><b>Subarea</b></td>
                                                <td>{wine.wine.subarea}</td>
                                            </tr>
                                            <tr>
                                                <td><b>Vintage</b></td>
                                                <td>{wine.wine.vintage}</td>
                                            </tr>
                                            <tr>
                                                <td><b>Size</b></td>
                                                <td>{wine.wine.size}L</td>
                                            </tr>
                                            <tr>
                                                <td><b>Alcohol</b></td>
                                                <td>{wine.wine.alcohol}%</td>
                                            </tr>
                                            <tr>
                                                <td><b>Web</b></td>
                                                <td><a target="_blank">
                                                    <div>{wine.wine.weblink}</div>
                                                </a></td>
                                            </tr>
                                            <tr>
                                                <td><b>Grapes</b></td>
                                                <td>
                                                    <div>
                                                        <a>grape names here</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    const clsr = closure.map(closure => {
        return (
            <div key={closure.closure.id}>
                <h6>Closure: {closure.closure.name}</h6>
            </div>
        )
    })
    const clr = color.map(color => {
        return (
            <div key={color.color.id}>
                <h6>Color: {color.color.name}</h6>
            </div>
        )
    })
    const shp = shape.map(shape => {
        return (
            <div key={shape.shape.id}>
                <h6>Shape: {shape.shape.name}</h6>
            </div>
        )
    })
    const typ = type.map(type => {
        return (
            <div key={type.type.id}>
                <h6>Type: {type.type.name}</h6>
            </div>
        )
    })
    return (
        <div>
            <div className="container">
                <div className="card p-2 shadow">
                    <div className="container justify-content-center">
                        {wn}
                    </div>
                    <div className="container">
                        <div className="card-body">
                            {clsr}
                            {clr}
                            {shp}
                            {typ}
                        </div>
                    </div>
                </div>
            </div>
            <br/><br/>
        </div>
    )
}
export default Wine;
