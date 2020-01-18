import React, { Component } from "react";
//belajar event di sini
class Form extends Component{
    constructor(){
        super();
        this.state = { data : ''}
    }

    handleChange = (event) => {
        this.setState({ data : event.target.value })
        console.log(this.state.data)
    }
    componentDidMount() {
        console.log('I was triggered during componentDidMount')
    }
    render(){
        return(
            <div>
                <input type="text" onChange={this.handleChange}/>
                <h3>{this.state.data}</h3>
            </div>
        )
    }
}

export default Form;