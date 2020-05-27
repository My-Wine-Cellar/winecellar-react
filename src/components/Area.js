import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";

class Area extends React.Component {
    state = {area: [], producer: [], grape: []}

    componentDidMount() {
        axios.get("/api/" + this.props.match.params.countryKey + "/" + this.props.match.params.regionKey + "/" + this.props.match.params.areaKey)
            .then(response => {
                this.setState({area: response.data.mywinecellar.areas})
                this.setState({producer: response.data.mywinecellar.producers})
                this.setState({grape: response.data.mywinecellar.grapes})
            })
            .catch(error => console.log("Error: ", error.status))
    }

    render() {
        const area = this.state.area.map(area => {
            return (
                <div className="card text-center" key={area.area.id}>
                    <div className="card-body">
                        <h2 className="card-header">{area.area.name}</h2>
                    </div>
                </div>
            )
        })

        const producerList = this.state.producer.map(producer => {
            return (
                <h5 className="card-header" key={producer.producer.id}>
                    <Link to={`/d/` + this.props.match.params.countryKey + "/" +
                    this.props.match.params.regionKey + "/" + this.props.match.params.areaKey +
                    `/${producer.producer.key}`}>{producer.producer.name}</Link>
                </h5>
            )
        })

        const grapeList = this.state.grape.map(grape => {
            return (
                <h5 className="card-header" key={grape.grape.id}>
                    <Link to={"/grape/" + `${grape.grape.key}`}>{grape.grape.name}</Link>
                </h5>
            )
        })

        return (
            <div className="container justify-content-center">
                {area}
                <h3 align="center">Producers</h3>
                <div className="container justify-content-center">
                    <div className="card text-center">
                        <div className="card-body p-1">
                            {producerList}
                        </div>
                    </div>
                </div>
                <h3 align="center">Grapes</h3>
                <div className="container justify-content-center">
                    <div className="card text-center">
                        <div className="card-body p-1">
                            {grapeList}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Area;