import React from "react";
import {BrowserRouter} from "react-router-dom";
import Route from "react-router-dom/es/Route";
import {Area} from "../entities/Area";
import {AreaGrapeList} from "../entities/AreaGrapeList";
import {AreaList} from "../entities/AreaList";
import {AreaProducerList} from "../entities/AreaProducerList";
import {Country} from "../entities/Country";
import {CountryList} from "../entities/CountryList";
import {Grape} from "../entities/Grape";
import {Grapes} from "../entities/Grapes";
import {Producer} from "../entities/Producer";
import {Region} from "../entities/Region";
import {RegionList} from "../entities/RegionList";
import {Wine} from "../entities/Wine";
import {Welcome} from "./Welcome";

// turn exact={true} to false to see more SPA-like app
export const Routes = () => {
    return (
        <>
            <BrowserRouter>
                <Route path="/" exact component={Welcome}/>
                <Route path="/d" exact component={CountryList}/>
                <Route path="/d/:countryKey" exact={true} component={Country}/>
                <Route path="/d/:countryKey" exact component={RegionList}/>
                <Route path="/d/:countryKey/:regionKey" exact={true} component={Region}/>
                <Route path="/d/:countryKey/:regionKey" exact component={AreaList}/>
                <Route path="/d/:countryKey/:regionKey/:areaKey/" exact={true} component={Area}/>
                <Route path="/d/:countryKey/:regionKey/:areaKey/" exact component={AreaProducerList}/>
                {/*<Route path="/d/:countryKey/:regionKey/:areaKey/" exact component={AreaGrapeList}/>*/}
                <Route path="/d/:countryKey/:regionKey/:areaKey/:producerKey" exact={true} component={Producer}/>
                <Route path="/d/:countryKey/:regionKey/:areaKey/:producerKey/:wineKey/:vintage/:size"
                       exact={true} component={Wine}/>
                <Route path="/grapes" exact component={Grapes}/>
                <Route path="/grape/:grapeKey" exact component={Grape}/>
            </BrowserRouter>
        </>
    )
}
