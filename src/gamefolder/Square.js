import React from 'react'

const Square =(props)=>{
    return(
        
        <div
        onClick={props.onClick}
         style={{border:"1px solid black"
        ,height:'100px',
        width:"100px",
        display:'flex',
        justifyContent:'center',
        alignItems:'center'}}
         className='square'>
            <h3>{props.value}</h3>
        </div>
    )
}

export default Square;