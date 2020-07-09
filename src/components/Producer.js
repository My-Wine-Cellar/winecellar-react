import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";

class Producer extends React.Component {
    state = {producer: [], wine: []}

    componentDidMount() {
        axios.get("/api/" + this.props.match.params.countryKey + "/" + this.props.match.params.regionKey + "/" + this.props.match.params.areaKey + "/" + this.props.match.params.producerKey)
            .then(response => {
                this.setState({producer: response.data.mywinecellar.producers})
                this.setState({wine: response.data.mywinecellar.wines})
            })
            .catch(error => console.log("Error: ", error))
    }

    render() {

        const producer = this.state.producer.map(producer => {
            return (
                <div>
                    <div className="card text-center" key={producer.producer.id}>
                        <div className="card-body">
                            <h2 className="card-header">{producer.producer.name}</h2>
                        </div>
                    </div>
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

        const wine = this.state.wine.map(wine => {
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
                                    <Link to={`/d/` + this.props.match.params.countryKey + `/` +
                                    this.props.match.params.regionKey + `/` + this.props.match.params.areaKey + `/` +
                                    this.props.match.params.producerKey + `/${wine.wine.key}` +
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
                        {producer}
                    </div>
                    <h3 align="center">Wines</h3>
                    {wine}
                </div>
            </div>
        )
    }
}

export default Producer;