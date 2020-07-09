import React from "react";
import axios from "axios";

class Wine extends React.Component {
    state = {wine: [], closure: [], color: [], shape: [], type: []}

    componentDidMount() {
        axios.get("/api/" + this.props.match.params.countryKey + "/" + this.props.match.params.regionKey + "/" +
            this.props.match.params.areaKey + "/" + this.props.match.params.producerKey + "/" +
            this.props.match.params.wineKey + "/" + this.props.match.params.vintage + "/" + this.props.match.params.size)
            .then(response => {
                this.setState({wine: response.data.mywinecellar.wines})
                this.setState({closure: response.data.mywinecellar.closures})
                this.setState({color: response.data.mywinecellar.colors})
                this.setState({shape: response.data.mywinecellar.shapes})
                this.setState({type: response.data.mywinecellar.types})
            })
            .catch(error => console.log("Error: ", error))
    }

    render() {
        const wine = this.state.wine.map(wine => {
            return (
                <div>
                    <div className="card text-center" key={wine.wine.id}>
                        <div className="card-body">
                            <h2 className="card-header">{wine.wine.name}</h2>
                        </div>
                    </div>
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
        const closure = this.state.closure.map(closure => {
            return (
                <div key={closure.closure.id}>
                    <h6>Closure: {closure.closure.name}</h6>
                </div>
            )
        })
        const color = this.state.color.map(color => {
            return (
                <div key={color.color.id}>
                    <h6>Color: {color.color.name}</h6>
                </div>
            )
        })
        const shape = this.state.shape.map(shape => {
            return (
                <div key={shape.shape.id}>
                    <h6>Shape: {shape.shape.name}</h6>
                </div>
            )
        })
        const type = this.state.type.map(type => {
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
                            {wine}
                        </div>
                        <div className="container">
                            <div className="card-body">
                                {closure}
                                {color}
                                {shape}
                                {type}
                            </div>
                        </div>
                    </div>
                </div>
                <br/><br/>
            </div>
        )
    }
}

export default Wine;