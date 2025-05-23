import { useState } from 'react'
import './App.css'

import logoImg from "./assets/logo.png";

function App() {


  return (
     <div>
         <main className='container'>
            <img className='logo' src={logoImg} alt="Logo calculadora de gasolina ou alcohl" title='Logo'/>
            <h1 className='title'>Qual a melhor Opção?</h1>

            <form className='form'>
                 <label htmlFor="">Alcool (preco / litro): </label>
                   <input className='input' type="number" placeholder='4,90' min={1} step={0.01} required/>

                  <label htmlFor="">Gasolina (preco / litro): </label>
                   <input className='input' type="number" placeholder='4,90' min={1} step={0.01} required/>

                 <input type="submit" className='button ' value="Calcular" />
            </form>
         </main>
     </div>
  )
}

export default App
