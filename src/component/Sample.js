import React, { Component} from "react";
import "../css/main.css";
class Sample extends Component{
    constructor(){
        super()
        this.state = { salam : 'Halo baru sudah mulai pakai state'};
    }

    salamkan = () => {
        this.setState({ salam : "salam untukmu"});
    }
    render(){
        return(
            <div className="warna">
                {this.state.salam} { this.props.nama} {this.props.nama_belakang}
                <button onClick={this.salamkan}>Salam !</button>
            </div>
        )
    }
}

export default Sample;