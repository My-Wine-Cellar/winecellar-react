import React, {useEffect, useState} from "react";
import Api from "./axios/Api";

const CountryEdit = (props) => {

    const [data, setData] = useState({
        weblink: '',
        description: ''
    });

    useEffect(() => {
        Api.get('/country/' + props.match.params.countryId)
            .then(response => {
                console.log('Response: ', response)
                setData(response.data.mywinecellar.countries[0].country)
            }).catch(error => console.log("Error: ", error))
    }, [])

    const handleSubmit = event => {
        event.preventDefault();
        Api.put('/country/' + props.match.params.countryId + '/edit', {
            weblink: data.weblink,
            description: data.description
        }).then(response => {
            console.log('Response: ', response)
            props.history.push('/d/' + response.data.mywinecellar.countries.map(country => country.country.key))
        }).catch(error => console.log('Error: ', error))
    };

    const handleChange = event => {
        const value = event.target.value;
        setData({
            ...data,
            [event.target.name]: value
        });
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <div className='form-group col-md-6'>
                        <label>Weblink</label>
                        <input
                            name='weblink'
                            type='text'
                            className='form-control'
                            value={data.weblink}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className='form-group'>
                    <div className='form-group col-md-6'>
                        <label>Description</label>
                        <textarea
                            name='description'
                            className='form-control'
                            value={data.description}
                            onChange={handleChange}
                            rows='5'
                        />
                    </div>
                </div>
                <input type='submit' value='Save' className='btn btn-primary ml-3'/>
            </form>
        </div>
    );
}
export default CountryEdit;
