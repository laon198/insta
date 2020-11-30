import React from "react";
import Login from "./Login";
import {Route} from "react-router-dom";

export default function AccoutRoute(){
    return(
        <div>
            <Route exact path="/accounts/login" component={Login} />
        </div>
    );
}