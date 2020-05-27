import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import countryImage from "../resources/images/country.jpg";

class Country extends React.Component {
    state = {country: [], region: []}

    componentDidMount() {
        axios.get("/api/" + this.props.match.params.countryKey)
            .then(response => {
                this.setState({country: response.data.mywinecellar.countries})
                this.setState({region: response.data.mywinecellar.regions})
            })
            .catch(error => console.log("Error: ", error.status));
    }

    render() {
        const country = this.state.country.map(country => {
            return (
                <div className="card text-center" key={country.country.id}>
                    <div className="card-body">
                        <h2 className="card-header">{country.country.name}</h2>
                    </div>
                </div>
            )
        })
        const regionList = this.state.region.map(regions => {
            return (
                <h5 className="card-header" key={regions.region.id}>
                    <Link to={`/d/` + this.props.match.params.countryKey + `/${regions.region.key}`}>{regions.region.name}</Link>
                    <img src="" alt=""/>
                </h5>
            )
        })
        // document.body.style.backgroundImage = `url(${countryImage})`;
        // document.body.style.backgroundSize = 'cover';
        return (
            <div>
                <div className="container">
                    <div className="card p-2 shadow">
                        <div className="container justify-content-center">
                            {country}
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="card p-2 shadow">
                        <div className="container justify-content-center">
                            <br/>
                            <h2 align="center">Regions</h2>
                            <br/>
                            <div className="card text-center">
                                <div className="card-body p-1">
                                    {regionList}
                                </div>
                            </div>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Country;