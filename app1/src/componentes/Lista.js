import React from "react";


export default function Lista() {
    const coisas=[
        {categoria:"AAA", tipo:"Pegueno", modelo:"Casa", Nome:"Chave"},
        {categoria:"AAA", tipo:"Pegueno", modelo:"Casa", Nome:"Parafu"},
        {categoria:"AAA", tipo:"Pegueno", modelo:"Casa", Nome:"Dobradiça"},
        {categoria:"BBB", tipo:"Pegueno", modelo:"Casa", Nome:"Lampada"},
        {categoria:"ccc", tipo:"Medio", modelo:"Casa", Nome:"Cadeira"},
        {categoria:"ccc", tipo:"Medio", modelo:"Casa", Nome:"Lustre"},
        {categoria:"ccc", tipo:"Medio", modelo:"Casa", Nome:"Cortina"},
        {categoria:"ccc", tipo:"Grande", modelo:"Casa", Nome:"Cama"},
        {categoria:"AAA", tipo:"Grande", modelo:"Casa", Nome:"Porta"},
        {categoria:"FFF", tipo:"Grande", modelo:"Casa", Nome:"Guarda Ropas"}
    ];

   const listaCoisas=coisas.map(
        (c,i)=>
            <li key={i}>{i} - {c.categoria} - {c.Nome} - {c.tipo}</li>
    )
    return (
        <>
        <ul>{listaCoisas}</ul>
        </>

    )
}