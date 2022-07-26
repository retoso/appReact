import React from "react";
export default function Dados(props){
    return(
        <section>
            <p>GitHub:{props.git}</p>
            <p>Linkedin:{props.lin}</p>
            <p>E-mail:{props.mail}</p>
        </section>
    )
}