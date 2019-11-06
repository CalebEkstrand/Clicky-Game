import React from "react"

function Picture(props){
    return(
        <div>
           <img alt={props.id}src={props.photo}data-id={props.id} onClick={props.func}style={{width:"100%",height:200}} /> 
        </div>
    );
}
export default Picture