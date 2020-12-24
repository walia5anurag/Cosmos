import React from 'react';
import '../TopMostArea/searchResult.css'
function DialogBox(props){
    console.log(props)
    let hitData;
    props.apiResponse.forEach(item=>{
    if(item.sectionName===props.searchWord)
            hitData = item;
    
    })
   

return(
    <div class='popup-box'>
    {hitData && 
    <div class='box'>
        <h1>Correct Search Result</h1>
        <button className="close-icon" onClick={props.func}>x</button>
    </div>
    }
      {!hitData && 
    <div class='box'>
        <h1>Use Write Tags</h1>
        <button className="close-icon" onClick={props.func}>x</button>
    </div>
    }
   
    </div>
)
}
export default DialogBox;