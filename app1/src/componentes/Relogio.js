import React from "react";

export default function Relogio(){
    const cumprimento=()=>{
        const hora=new Date().getHours()
        if (hora >=0 && hora < 13){
            return <p><h1>Bom dia!!</h1></p>
        }else if (hora >=13 && hora < 18){
            return <p><h1>Boa tarde!!</h1></p>
        } else{
            return <p><h1>Boa noite!!</h1></p>
        }
    }
    return(
        <p>
                           {cumprimento()}
        </p>
    );
}
