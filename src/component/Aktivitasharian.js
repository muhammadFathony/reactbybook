import React, { Component } from "react"
import { FormControl } from 'react-bootstrap/FormControl';

class Aktivitasharian extends Component{

    constructor(){
        super()
        this.state = { todos : [] }
    }

    addTodo = (e) => {
        e.preventDefault();

        let jam = this.refs.jam.value;
        let aktivitas = this.refs.aktivitas.value;

        this.state.todos.push({ jam, aktivitas });
        this.setState({ todos : this.state.todos })

        this.refs.formulir.reset();
        this.refs.jam.focus();
    }

    removeTodo = (i) =>{
        this.state.todos.splice(i);
        this.setState({ todos: this.state.todos })
    }

    render(){
        return(
            <div>
                <h1>Aktivitas harian</h1>
                <form ref="formulir">
                    <input type="text" ref="jam" placeholder="jam aktivitas" />
                    <input type="text" ref="aktivitas" placeholder="jenis aktivitas" />
                    <button onClick={this.addTodo}>Simpan</button>
                </form>
                <hr />
                <div>
                    <ul>
                        {this.state.todos.map((data, i) =>
                        //i itu ternyata penomoran
                            <li key={i}>
                                <div>
                                    <button onClick={ () => this.removeTodo(i)}>Hapus</button>
                                    {i}
                                    {data.jam} : {data.aktivitas}
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Aktivitasharian;