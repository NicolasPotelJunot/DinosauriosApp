import React from 'react'

export const SectionFirst = () => {

  return (

    <section className='main-quiensoy_bg w-full grid justify-items-end h-full py-10 pr-10'>

          <img 
          src='/assets/img/logo/logo-white-v2.svg' 
          className='h-52 w-1/3 animate__animated animate__fadeInDown'
          />

         <div className='background-white-translucent animate__animated animate__fadeInDown rounded-xl p-4 text-white w-1/3 grid gap-2 text-shadow'>

            <p className='text-shadow'>Dinosarios es mi primer gran proyecto como programador front-end.</p>
            <p>Me aventure hacer esta aplicación, soy amante de la tecnología y de los dinosaurios.</p>
            <p>Como idea me surgió como una necesidad... Siempre quise una página como esta, solo dinos argentinos.💕</p>  

         </div>

      </section>

  )
}
