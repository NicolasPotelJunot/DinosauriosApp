import React, { useState } from 'react'
import {dinosaurios} from '../data/dinosaurs'
import {DinoCard} from './ui/DinoCard'

export const ListDinosScreen = () => {

  const [query, setquery] = useState("")

  dinosaurios.sort((a,b)=>{
    const idDinoA = a.namedino.toLowerCase()
    const idDinoB = b.namedino.toLowerCase()
    if(idDinoA<idDinoB){
      return -1
    }
    if(idDinoA>idDinoB){
      return 1
    }
    return 0
  });

  return (

    <section className="bg-gray-100 p-3 h-screen overflow-y-scroll w-full animate__animated animate__fadeIn" >

      <h1 className="text-center font-style-bold text-slate-500 text-4xl text-bold my-7">
          DINOSAURIOS ARGENTINOS
      </h1>

      <form className=' w-full mt-10 mb-5'>

          <input 
          className='mx-auto bg-gray-100 w-3/4 block shadow shadow-slate-300 rounded-xl p-3 border border-slate-300 focus:outline-none focus:border-blue-400 sm:text-sm transition'
          type="text"          
          placeholder='Buscar dinosaurio'
          name="searchDino"
          onChange={(e)=>setquery(e.target.value)} 
          />

      </form>

      <div className="p-3 grid grid-cols-4 gap-5 max-w-5xl mx-auto">

        {
          dinosaurios.filter((dino)=>dino.namedino.toLowerCase().includes(query)).map( dino => (
              <DinoCard 
                  key={dino.id} 
                  {...dino}
              />
          ))
        }

      </div>

    </section>
    
  )
}
