import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Welcome from "./Welcome";
import Countries from "./Countries";
import Country from "./Country";
import Region from "./Region";
import Grape from "./Grape";
import GrapeDetails from "./GrapeDetails";
import Navbar from "./Navbar";
import Producer from "./Producer";
import Wine from "./Wine";
import Area from "./Area";
import AreaAddGrape from "./AreaAddGrape";
import CountryEdit from "./CountryEdit";

class App extends React.Component {

    render() {
        // document.body.style.backgroundImage = `url(${welcome})`;
        // document.body.style.backgroundSize = 'cover';
        return (
            <div className="container">
                <BrowserRouter>
                    <Navbar/>
                    <Route path="/" exact component={Welcome}/>
                    <Route path="/d" exact component={Countries}/>
                    <Route path="/d/:countryKey" exact component={Country}/>
                    <Route path="/country/:countryId/edit" exact component={CountryEdit}/>
                    <Route path="/d/:countryKey/:regionKey" exact component={Region}/>
                    <Route path="/d/:countryKey/:regionKey/:areaKey/" exact component={Area}/>
                    <Route path="/area/:areaId/addGrape" exact component={AreaAddGrape}/>
                    <Route path="/d/:countryKey/:regionKey/:areaKey/:producerKey" exact component={Producer}/>
                    <Route path="/d/:countryKey/:regionKey/:areaKey/:producerKey/:wineKey/:vintage/:size" exact
                           component={Wine}/>
                    <Route path="/grapes" exact component={Grape}/>
                    <Route path="/grape/:grapeKey" exact component={GrapeDetails}/>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
