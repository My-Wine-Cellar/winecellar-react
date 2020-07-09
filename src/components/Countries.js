import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";

class Countries extends React.Component {
    state = {country: []};

    componentDidMount() {
        axios.get("/api/countries")
            .then(response => {
                this.setState({country: response.data.mywinecellar.countries})
            })
            .catch(error => console.log("Error: ", error.status));
    }

    render() {
        const countrylist = this.state.country.map(countries => {
            return (
                <h5 className="card-header" key={countries.country.id}>
                    <Link to={`/d/${countries.country.key}`}>{countries.country.name}  </Link>
                    <img src={require(`../resources/images/flags/${countries.country.flag}.png`)} alt={countries.country.name}/>
                </h5>
            )
        });
        // document.body.style.backgroundImage = `url(${countryImage})`;
        // document.body.style.backgroundSize = 'cover';
        return (
            <div className="container">
                <div className="card p-2 shadow">
                    <div className="container justify-content-center">
                        <br/>
                        <h2 align="center">Countries</h2>
                        <br/>
                        <div className="card text-center">
                            <div className="card-body p-1">
                                {countrylist}
                            </div>
                        </div>
                        <br/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Countries;
