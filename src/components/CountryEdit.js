import React from "react";
import axios from "axios";

class CountryEdit extends React.Component {

    state = {weblink: "", description: "", key: ""};

    // no constructor as the state is already set
    // and the functions use arrows to automatically bind them

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    handleSubmit = event => {
        event.preventDefault(); //prevents enter from submitting form

        axios.put("/api/country/" + this.props.match.params.countryId + "/edit", {
            weblink: this.state.weblink,
            description: this.state.description
        }).then(r => {
            console.log("Response: ", r)
            this.setState({key: r.data.mywinecellar.countries.map(country => country.country.key)})
            this.props.history.push('/d/' + this.state.key)
        }).catch(e => console.log("Error: ", e))
    };

    render() {
        // I prefer to pull out the bits of props and state at the top of the
        // function so I know what we're actually using without having to
        // read the whole thing
        const {weblink, description} = this.state;

        // Because you are using the contents of the event to work
        // out which bit of state to update, you can take a shortcut
        // and just put the change handler on the form!
        // removed that due to output in web console
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <div className="form-group col-md-6">
                        <label>Weblink</label>
                        <input
                            type="text"
                            name="weblink"
                            className="form-control"
                            onChange={this.handleChange}
                            value={weblink}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-group col-md-6">
                        <label>Description</label>
                        <textarea
                            name="description"
                            className="form-control"
                            onChange={this.handleChange}
                            rows="5"
                            value={description}
                        />
                    </div>
                </div>
                <input type="submit" value="Save" className="btn btn-primary ml-3"/>
            </form>
        );
    }
}

export default CountryEdit;