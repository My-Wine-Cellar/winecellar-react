import React, {useEffect, useState} from "react";
import Api from "../axios/Api";

export const useCountriesGet = () => {

    const [country, setCountry] = useState([])

    useEffect(() => {
        Api.get('/countries')
            .then(response => {
                setCountry(response.data.mywinecellar.countries)
            }).catch(error => console.log("Error: ", error))
    }, [])
    return country;
}

export const useCountryGet = (props) => {

    const [country, setCountry] = useState([]);
    const [region, setRegion] = useState([]);

    useEffect(() => {
        Api.get('/' + props.match.params.countryKey)
            .then(response => {
                setCountry(response.data.mywinecellar.countries)
                setRegion(response.data.mywinecellar.regions)
            }).catch(error => console.log("Error: ", error))
    }, [])
    return {country, region}
}

export const useCountryByKeyGet = (props) => {
    const [country, setCountry] = useState([]);

    useEffect(() => {
        Api.get('/' + props.match.params.countryKey)
            .then(response => {
                console.log('Response: ', response)
                setCountry(response.data.mywinecellar.countries[0].country)
            }).catch(error => console.log("Error: ", error))
    }, [])
    return country;
}

export const useRegionGet = (props) => {

    const [region, setRegion] = useState([]);
    const [area, setArea] = useState([]);

    useEffect(() => {
        Api.get('/' + props.match.params.countryKey + '/' + props.match.params.regionKey)
            .then(response => {
                setRegion(response.data.mywinecellar.regions)
                setArea(response.data.mywinecellar.areas)
            }).catch(error => console.log("Error: ", error))
    }, [])
    return {region, area}
}

export const useRegionByKeyGet = (props) => {
    const [region, setRegion] = useState([]);

    useEffect(() => {
        Api.get('/' + props.match.params.countryKey + '/' + props.match.params.regionKey)
            .then(response => {
                setRegion(response.data.mywinecellar.regions[0].region)
            }).catch(error => console.log("Error: ", error))
    }, [])
    return region;
}

export const useAreaGet = (props) => {
    const [area, setArea] = useState([]);
    const [producer, setProducer] = useState([]);
    const [grape, setGrape] = useState([]);

    useEffect(() => {
        Api.get('/' + props.match.params.countryKey + '/' + props.match.params.regionKey + '/' + props.match.params.areaKey)
            .then(response => {
                setArea(response.data.mywinecellar.areas)
                setProducer(response.data.mywinecellar.producers)
                setGrape(response.data.mywinecellar.grapes)
            }).catch(error => console.log('Error: ', error))
    }, [])
    return {area, producer, grape}
}

export const useAreaByKeyGet = (props) => {
    const [area, setArea] = useState([]);

    useEffect(() => {
        Api.get('/' + props.match.params.countryKey + '/' + props.match.params.regionKey + '/' + props.match.params.areaKey)
            .then(response => {
                setArea(response.data.mywinecellar.areas[0].area)
            }).catch(error => console.log('Error: ', error))
    }, [])
    return area;
}

export const useGrapeGet = (props) => {
    const [grape, setGrape] = useState([])

    useEffect(() => {
        Api.get('/grape/' + props.match.params.grapeKey)
            .then(response => setGrape(response.data.mywinecellar.grapes))
            .catch(error => console.log('Error: ', error))
    }, [])
    return grape;
}

export const useGrapeByKeyGet = (props) => {
    const [grape, setGrape] = useState([])

    useEffect(() => {
        Api.get('/grape/' + props.match.params.grapeKey)
            .then(response => setGrape(response.data.mywinecellar.grapes[0].grape))
            .catch(error => console.log('Error: ', error))
    }, [])
    return grape;
}

export const useGrapeRedGet = () => {
    const [red, setRed] = useState([]);

    useEffect(() => {
        Api.get('/grape/red')
            .then(response => {
                setRed(response.data.mywinecellar.grapes)
            }).catch(error => console.log('Error: ', error))
    }, [])
    return red;
}

export const useGrapeWhiteGet = () => {
    const [white, setWhite] = useState([]);

    useEffect(() => {
        Api.get('/grape/white')
            .then(response => {
                setWhite(response.data.mywinecellar.grapes)
            }).catch(error => console.log('Error: ', error))
    }, [])
    return white;
}
