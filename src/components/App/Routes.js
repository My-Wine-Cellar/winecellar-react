import React from "react";
import {BrowserRouter} from "react-router-dom";
import Route from "react-router-dom/es/Route";
import Area from "../Area";
import Countries from "../Countries";
import Country from "../Country";
import Grape from "../Grape";
import Grapes from "../Grapes";
import Producer from "../Producer.js";
import Region from "../Region";
import Wine from "../Wine";

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
