import React from "react";
import axios from "axios";

class GrapeDetails extends React.Component {
    state = {grape: []}

    componentDidMount() {
        axios.get("/api/grape/" + this.props.match.params.grapeKey)
            .then(response => {
                this.setState({grape: response.data.mywinecellar.grapes})
            })
    }

    render() {
        const grape = this.state.grape.map(grape => {
            return (
                <h5 className="card-header text-center" key={grape.grape.id}>
                    {grape.grape.name}
                </h5>
            )
        })
        return (
            <div className="container">
                <div className="card p-2 shadow">
                    <div className="container">
                        <div className="card shadow p-4 m-3">
                            {grape}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default GrapeDetails;