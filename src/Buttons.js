import React from 'react'


export default function Buttons(){
    function clk(e){
        e.preventDefault()
    document.querySelector('.btn2')
    .addEventListener('click',(e)=>{
    var a = document.querySelector('.info').style.display
    if(a==="flex"){
        document.querySelector('.info').style.display = "none"
    }else{
        document.querySelector('.info').style.display = "flex"
    }
})
    }
    return (
        <div className="buttons">
            <div className="btn1">Contact</div>
            <div className="btn2" onClick={clk}>View Portfolio</div>
        </div>
    );
}

