import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import grape from "../resources/images/grape.jpg"

class Grape extends React.Component {
    state = {red: [], white: []}

    componentDidMount() {
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
        const redGrapes = this.state.red.map(red => {
            return (
                <h5 className="card-header" key={red.grape.id}>
                    <Link to={"/grape/" + `${red.grape.key}`}>{red.grape.name}</Link>
                </h5>
            )
        })
        const whiteGrapes = this.state.white.map(white => {
            return (
                <h5 className="card-header" key={white.grape.key}>
                    <Link to={"/grape/" + `${white.grape.key}`}>{white.grape.name}</Link>
                </h5>
            )
        })
        // document.body.style.backgroundImage = `url(${grape})`;
        // document.body.style.backgroundSize = 'cover';
        return (
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
        )
    }

}

export default Grape;