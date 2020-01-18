import React, { Component } from "react";

class Sampledata extends Component{
    
    constructor(){
        super();
        this.state = {
            siswa : [
                {
                    id : 1,
                    nama : `Toni`
                },
                {
                    id : 2,
                    nama : `Budi`
                },
                {
                    id : 3,
                    nama : `Rudi`
                }
            ]
        }
    }

    componentDidMount() {
        console.log(this.state.siswa)
    }

    render(){
        return(
            <div className="jsondinamis">
                {
                    this.state.siswa.map((dinamis, key) =>
                        <div key={dinamis.id} className="isijson">
                            <h3 >{dinamis.id}. {dinamis.nama}</h3>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Sampledata;