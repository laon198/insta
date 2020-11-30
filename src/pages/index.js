import React from "react";
import Home from "./";
import { Route } from "react-router-dom";
import AccountsRoutes from "./accounts";

//Page Route용
export default function Root(){
    return(
        <div>
            <Route exact path="/home" component={Home} />
            {/* <Route path="/accounts" component={AccountsRoutes} /> */}
        </div>
    );
}