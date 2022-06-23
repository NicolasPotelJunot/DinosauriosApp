import React from 'react'
import {Link} from 'react-router-dom'

export const DinoCard = ({
  id,
  namedino, 
  tipo,
  era,  
}) => {
  
  const dinoImage = `/assets/img/${id}.jpg`
  
  return (

    <article className='bg-white rounded-2xl transition-all duration-300 hover:shadow-gray-400 hover:shadow-xl hover:relative hover:-translate-y-2 '>

        <Link to={`/dino/${id}`} className=' grid h-full justify-between p-4 transition-all duration-300 rounded-2xl hover:shadow-inner hover:shadow-zinc-300'>

          <img src={ dinoImage } alt={id} className="h-32 mx-auto mb-5" />

          <div className='h-24 flex flex-col justify-end border-t border-gray-300'>
              <div className=' flex place-items-center h-full'>
                 <h5 className=' w-full text-center font-bold text-xl'>{namedino}</h5>
              </div>

              <div className='flex justify-center'>
                 <p className='text-sm text-center mr-1'>{tipo} -</p>
                 <p className='text-sm text-center'>{era}</p>
              </div>

          </div>

        </Link>

    </article>

  )
}
