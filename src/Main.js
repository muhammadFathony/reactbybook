import React, { Component } from "react";
import Form from "./component/Form"; //mengatur event
import Sample from "./component/Sample"; //ini pakai props
import Sampledata from "./component/Sampledata"; // mengatur json
import Aktivitasharian from "./component/Aktivitasharian";
class Main extends Component{
    render(){
        return(
            <div >
                <Aktivitasharian />
            </div>
        )
    }
}

export default Main;