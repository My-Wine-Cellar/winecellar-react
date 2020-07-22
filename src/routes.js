import {BrowserRouter, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Countries from "./components/Countries";
import Country from "./components/Country";
import CountryEdit from "./components/CountryEdit";
import Region from "./components/Region";
import Area from "./components/Area";
import Producer from "./components/Producer";
import Wine from "./components/Wine";
import Grape from "./components/Grape";
import GrapeDetails from "./components/GrapeDetails";
import React from "react";

export const Routes = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <Route path="/" exact component={Welcome}/>
                <Route path="/d" exact component={Countries}/>
                <Route path="/d/:countryKey" exact component={Country}/>
                <Route path="/country/:countryId/edit" exact component={CountryEdit}/>
                <Route path="/d/:countryKey/:regionKey" exact component={Region}/>
                <Route path="/d/:countryKey/:regionKey/:areaKey/" exact component={Area}/>
                <Route path="/d/:countryKey/:regionKey/:areaKey/:producerKey" exact component={Producer}/>
                <Route path="/d/:countryKey/:regionKey/:areaKey/:producerKey/:wineKey/:vintage/:size" exact
                       component={Wine}/>
                <Route path="/grapes" exact component={Grape}/>
                <Route path="/grape/:grapeKey" exact component={GrapeDetails}/>
            </BrowserRouter>
        </>
    )
}