import React, { Component } from 'react'
import './mainArea.css'
class mainArea extends Component{
    constructor(props){
        super(props)
        this.state={
 
        }
    }

    render(){
        return(
        <header>
            <div class='title'>
                <h1>The Cosmos</h1>
                <p class='subtitle'>By Anurag, using Guardian API</p>
            </div>
            <div class='search'>
                <input></input>
            </div>
        </header>
        )
    }

}
export default mainArea;