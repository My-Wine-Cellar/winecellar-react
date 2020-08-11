import React from "react";
import {BrowserRouter} from "react-router-dom";
import Route from "react-router-dom/es/Route";
import Area from "../entities/Area";
import Countries from "../entities/Countries";
import Country from "../entities/Country";
import Grape from "../entities/Grape";
import Grapes from "../entities/Grapes";
import Producer from "../entities/Producer.js";
import Region from "../entities/Region";
import Wine from "../entities/Wine";

export const Routes = () => {
    return (
        <>
            <BrowserRouter>
                <Route path="/"/>
                <Route path="/d" exact component={Countries}/>
                <Route path="/d/:countryKey" exact component={Country}/>
                <Route path="/d/:countryKey/:regionKey" exact component={Region}/>
                <Route path="/d/:countryKey/:regionKey/:areaKey/" exact component={Area}/>
                <Route path="/d/:countryKey/:regionKey/:areaKey/:producerKey" exact component={Producer}/>
                <Route path="/d/:countryKey/:regionKey/:areaKey/:producerKey/:wineKey/:vintage/:size" exact
                       component={Wine}/>
                <Route path="/grapes" exact component={Grapes}/>
                <Route path="/grape/:grapeKey" exact component={Grape}/>
            </BrowserRouter>
        </>
    )
}
