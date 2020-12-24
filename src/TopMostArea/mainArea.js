import axios from 'axios'
import React, { Component } from 'react'
import './mainArea.css'
import DialogBox from '../TopMostArea/searchResult'
class mainArea extends Component{
    constructor(props){
        super(props)
        this.state={
            searchKeyWord:'',
            openDialog:false,
            data:[],
        }
    }
handleSearch=(evt)=>{
    console.log(evt.target.value)
   
    this.setState({
        searchKeyWord:evt.target.value,
    })
}
submitSearch=()=>{
    console.log(this.state.searchKeyWord)
    axios.get('https://content.guardianapis.com/search?q='+this.state.searchKeyWord+'&api-key=fc9dc684-1029-4847-830a-b19cc6f67841')
    .then(response=>{
        this.setState({
            openDialog:!this.state.openDialog,
            data:response.data.response.results,
        })
      console.log(response.data)
      console.log(this.state.openDialog)
    })
}
    render(){
        return(
        <header>
            <div class='title'>
                <h1>The Cosmos</h1>
                <p class='subtitle'>By Anurag, using Guardian API</p>
            </div>
            <div class='search'>
                <label htmlFor="search" >Search your topics</label><br/><br/>
                <div class='search_Bar'>
                    <input type="text" placeholder="Search.." name="search" onChange={this.handleSearch}/>
                    <button type="submit" onClick={this.submitSearch}><i class="fa fa-search"></i></button>
                    <DialogBox searchWord={this.state.searchKeyWord} apiResponse={this.state.data}/>
                </div>
            </div>
        </header>
        )
    }

}
export default mainArea;