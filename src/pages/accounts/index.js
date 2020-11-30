import React from "react";
import Login from "./Login";

export default function Route(){
    return(
        <div>
            <Route exact path="/login" component={Login} />
        </div>
    );
}