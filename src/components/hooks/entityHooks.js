import React, {useEffect, useState} from "react";
import Api from "../axios/Api";

export const useCountriesGet = () => {
    const [country, setCountry] = useState([])

    useEffect(() => {
        Api.get('/countries')
            .then(response => {
                setCountry(response.data.mywinecellar.countries)
            }).catch(error => console.log("Error useCountriesGet: ", error))
    }, [])
    return country;
}

export const useCountryGet = (props) => {
    const [country, setCountry] = useState([]);

    useEffect(() => {
        Api.get('/' + props.match.params.countryKey)
            .then(response => {
                setCountry(response.data.mywinecellar.countries)
            }).catch(error => console.log("Error useCountryGet: ", error))
    }, [])
    return country
}

export const useRegionByCountryGet = (props) => {
    const [region, setRegion] = useState([]);

    useEffect(() => {
        Api.get('/' + props.match.params.countryKey)
            .then(response => {
                console.log('Response useRegionByCountryGet ', response)
                setRegion(response.data.mywinecellar.regions)
            }).catch(error => console.log("Error useRegionByCountryGet: ", error))
    }, [])
    return region
}

export const useCountryByKeyGet = (props) => {
    const [country, setCountry] = useState([]);

    useEffect(() => {
        Api.get('/' + props.match.params.countryKey)
            .then(response => {
                console.log('Response useCountryByKeyGet: ', response)
                setCountry(response.data.mywinecellar.countries[0].country)
            }).catch(error => console.log("Error useCountryByKeyGet: ", error))
    }, [])
    return country;
}

export const useRegionGet = (props) => {
    const [region, setRegion] = useState([]);

    useEffect(() => {
        Api.get('/' + props.match.params.countryKey + '/' + props.match.params.regionKey)
            .then(response => {
                setRegion(response.data.mywinecellar.regions)
            }).catch(error => console.log("Error: ", error))
    }, [])
    return region;
}

export const useAreaByRegionGet = (props) => {
    const [area, setArea] = useState([]);

    useEffect(() => {
        Api.get('/' + props.match.params.countryKey + '/' + props.match.params.regionKey)
            .then(response => {
                setArea(response.data.mywinecellar.areas)
            }).catch(error => console.log("Error: ", error))
    }, [])
    return area;
}

export const useRegionByKeyGet = (props) => {
    const [region, setRegion] = useState([]);

    useEffect(() => {
        Api.get('/' + props.match.params.countryKey + '/' + props.match.params.regionKey)
            .then(response => {
                console.log('Response useRegionByKeyGet: ', response)
                setRegion(response.data.mywinecellar.regions[0].region)
            }).catch(error => console.log("Error: ", error))
    }, [])
    return region;
}

export const useAreaGet = (props) => {
    const [area, setArea] = useState([]);

    useEffect(() => {
        Api.get('/' + props.match.params.countryKey + '/' + props.match.params.regionKey + '/' + props.match.params.areaKey)
            .then(response => {
                setArea(response.data.mywinecellar.areas)
            }).catch(error => console.log('Error: ', error))
    }, [])
    return area
}

export const useProducerByAreaGet = (props) => {
    const [producer, setProducer] = useState([]);
    const [area, setArea] = useState([]);

    useEffect(() => {
        Api.get('/' + props.match.params.countryKey + '/' + props.match.params.regionKey + '/' + props.match.params.areaKey)
            .then(response => {
                setProducer(response.data.mywinecellar.producers)
                setArea(response.data.mywinecellar.areas)
            }).catch(error => console.log('Error: ', error))
    }, [])
    return [producer, area]
}

export const useGrapeByAreaGet = (props) => {
    const [grape, setGrape] = useState([]);
    const [area, setArea] = useState([]);

    useEffect(() => {
        Api.get('/' + props.match.params.countryKey + '/' + props.match.params.regionKey + '/' + props.match.params.areaKey)
            .then(response => {
                setGrape(response.data.mywinecellar.grapes)
                setArea(response.data.mywinecellar.areas)
            }).catch(error => console.log('Error: ', error))
    }, [])
    return [grape, area]
}

export const useAreaByKeyGet = (props) => {
    const [area, setArea] = useState([]);

    useEffect(() => {
        Api.get('/' + props.match.params.countryKey + '/' + props.match.params.regionKey + '/' + props.match.params.areaKey)
            .then(response => {
                console.log('Response useAreaByKeyGet: ', response)
                setArea(response.data.mywinecellar.areas[0].area)
            }).catch(error => console.log('Error: ', error))
    }, [])
    return area;
}

export const useProducerGet = (props) => {
    const [producer, setProducer] = useState([]);

    useEffect(() => {
        Api.get('/' + props.match.params.countryKey + '/' + props.match.params.regionKey + '/' +
            '/' + props.match.params.areaKey + '/' + props.match.params.producerKey)
            .then(response => {
                setProducer(response.data.mywinecellar.producers)
            }).catch(error => console.log("Error: ", error))
    }, [])
    return producer;
}

export const useWineByProducerGet = (props) => {
    const [wine, setWine] = useState([]);

    useEffect(() => {
        Api.get('/' + props.match.params.countryKey + '/' + props.match.params.regionKey + '/' +
            '/' + props.match.params.areaKey + '/' + props.match.params.producerKey)
            .then(response => {
                setWine(response.data.mywinecellar.wines)
            }).catch(error => console.log("Error: ", error))
    }, [])
    return wine;
}

export const useProducerByKeyGet = (props) => {
    const [producer, setProducer] = useState([]);

    useEffect(() => {
        Api.get('/' + props.match.params.countryKey + '/' + props.match.params.regionKey + '/' +
            '/' + props.match.params.areaKey + '/' + props.match.params.producerKey)
            .then(response => {
                console.log('Response useProducerByKeyGet: ', response)
                setProducer(response.data.mywinecellar.producers[0])
            }).catch(error => console.log('Error useProducerByKeyGet: ', error))
    }, [])
    return producer;
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
