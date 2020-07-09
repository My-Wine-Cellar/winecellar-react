import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";

class AreaAddGrape extends React.Component {
    state = {area: [], red: [], white: []}

    componentDidMount() {
        axios.get("/api/area/" + this.props.match.params.areaId)
            .then(response => {
                this.setState({area: response.data.mywinecellar.areas})
            })
            .catch(error => console.log("Error: ", error.status))
        axios.get("/api/grape/red")
            .then(response => {
                this.setState({red: response.data.mywinecellar.grapes})
            })
            .catch(error => console.log("Error: ", error.status))
        axios.get("/api/grape/white")
            .then(response => {
                this.setState({white: response.data.mywinecellar.grapes})
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

        const redGrapes = this.state.red.map(red => {
            return (
                <h5 className="card-header" key={red.grape.id}>
                    <Link to={`/grape/${red.grape.key}`}>{red.grape.name}</Link>
                </h5>
            )
        })
        const whiteGrapes = this.state.white.map(white => {
            return (
                <h5 className="card-header" key={white.grape.key}>
                    <Link to={`/grape/${white.grape.key}`}>{white.grape.name}</Link>
                </h5>
            )
        })

        {/* TODO turn this into a form */}

        return (
            <div className="container justify-content-center">
                {area}

                <div className="container">
                    <div className="card shadow">
                        <div className="row p-3">
                            <div className="col-sm">
                                <h2 align="center">Red Grapes</h2>
                                <div className="card">
                                    <div className="card-body p-1">
                                        {redGrapes}
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm">
                                <h2 align="center">White Grapes</h2>
                                <div className="card">
                                    <div className="card-body p-1">
                                        {whiteGrapes}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        )
    }
}

export default AreaAddGrape;