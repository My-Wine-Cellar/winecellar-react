import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import regionImage from "../resources/images/region.jpg";

class Region extends React.Component {
    state = {region: [], area: []}

    componentDidMount() {
        axios.get("/api/" + this.props.match.params.countryKey + "/" + this.props.match.params.regionKey)
            .then(response => {
                this.setState({region: response.data.mywinecellar.regions})
                this.setState({area: response.data.mywinecellar.areas})
            })
            .catch(error => console.log("Error: ", error.status))
    }

    render() {
        const region = this.state.region.map(region => {
            return (
                <div className="card text-center" key={region.region.id}>
                    <div className="card-body">
                        <h2 className="card-header">{region.region.name}</h2>
                    </div>
                </div>
            )
        })
        const areaList = this.state.area.map(areas => {
            return (
                <h5 className="card-header" key={areas.area.id}>
                    <Link to={`/d/` + this.props.match.params.countryKey + "/" +
                    this.props.match.params.regionKey + `/${areas.area.key}`}>{areas.area.name}</Link>
                </h5>
            )
        })
        // document.body.style.backgroundImage = `url(${regionImage})`;
        // document.body.style.backgroundSize = 'cover';
        return (
            <div>
                <div>
                    <div className="container">
                        <div className="card p-2 shadow">
                            <div className="container justify-content-center">
                                {region}
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="card p-2 shadow">
                            <div className="container justify-content-center">
                                <br/>
                                <h2 align="center">Areas</h2>
                                <br/>
                                <div className="card text-center">
                                    <div className="card-body p-1">
                                        {areaList}
                                    </div>
                                </div>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Region;