import React, { useState } from 'react'
import './App.css'
import Header from './componentes/Header'
import Corpo from './componentes/Corpo'
import Dados from './componentes/Dados'
import Relogio from './componentes/Relogio'
import Numero from './componentes/Numero'

export default function App(){
  const [num,setNum]=useState(10)

  return(
    <>
    <section className='container'>
      <Relogio/>
      <Header/>
      <Corpo/>
      <p>Valor do state num em APP: {num}</p>
      <Numero num={num} setNum={setNum}/>
      <p className='texto'> texto livre </p>
      <Dados git=' github/retoso' lin=' linkedin.com/in/renatosouza1969/' mail=' tonelli.renato@gmail.com'/>
    </section>
    </>
  )
}

