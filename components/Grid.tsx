import { arrayRandomNumbers, random } from '../utilities/functions'
import React, { useState } from 'react'
import type { MouseEventHandler } from 'react'
import dynamic from 'next/dynamic'
import Button from './Button'
import { DarkMode } from '../utilities/SVGs'

export default function Grid() {
  const [arr_id, setID] = useState<Array<number>>(arrayRandomNumbers())
  const RandomFox = dynamic(() => import('../components/ImageRandomFox'), {
    ssr: false,
  })

  const handlerClick: MouseEventHandler<HTMLButtonElement> = () => {
    setID([...arr_id, random()])
  }

  return (
    <>
      <section className='flex flex-wrap justify-between items-center h-20 px-8'>
        <button
          title='Modo Oscuro'
          onClick={() => {
            document.documentElement.classList.toggle('dark')
          }}
        >
          <DarkMode />
        </button>
        <Button
          tag=' Agregar Nueva Imagen'
          onClick={handlerClick}
          id='btn'
          name='btn'
          type='button'
        />
      </section>
      {/* -------------------------------------------------------------------------------------*/}
      <section className='grid grid-cols-3 gap-2 m-4 bg-orange dark:bg-stone-950 dark:text-white p-4 rounded-md'>
        {arr_id.map((number) => (
          <RandomFox key={crypto.randomUUID()} id={number} />
        ))}
      </section>
    </>
  )
}
