import React, { Component } from "react";
import Form from "./component/Form";
import Sample from "./component/Sample";
import Sampledata from "./component/Sampledata";
class Main extends Component{
    render(){
        return(
            <div >
                <Sample nama="ini pakai props" nama_belakang="belakang juga props" />
                <Sample />
                <Sample />
                <Sample />
                <Sample />
                <Sample />
                <h1>Ini batas -- di bawah ini merupakan cara untuk mengatur event</h1>
                <Form />
                <h1>Ini batas -- di bawah ini merupakan cara untuk mengatur data json</h1>
                <Sampledata />
            </div>
        )
    }
}

export default Main;