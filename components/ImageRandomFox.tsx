import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

type Props = {
  id: number
}

export default function ImageRandomFox({ id }: Props): JSX.Element {
  const image = useRef<HTMLImageElement>(null)
  const [url, setUrl] = useState<URL>(
    new URL(
      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4='
    )
  )

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entrie) => {
        if (entrie.isIntersecting) {
          setUrl(new URL(`https://randomfox.ca/images/${id}.jpg`))
        }
      })
    })

    //  agregar un footer en varios iconos de zorros de tipo SVG
    // o agregarlo en el header

    if (image.current) observer.observe(image.current)

    return () => {
      observer.disconnect()
    }
  }, [id])

  return (
    <div className='p-4 border border-orange-700 rounded shadow-xl'>
      <div className='mb-4 text-center font-black'>
        <h2 className='bg-orange-700 text-white py-3'>{`Fox ${id}`}</h2>
      </div>
      <Image
        title={`Fox ${id}`}
        ref={image}
        src={url.href}
        alt={`fox-${id}`}
        width={400}
        height={900}
        className=' bg-gray-100 hover:scale-105'
      />
      <section className='mt-4 mb-5 px-4'>
        <h3 className='font-bold truncate'>Link</h3>
        <a
          href={url.href}
          target='_blank'
          rel='noopener noreferrer'
          className='block truncate'
          title={url.href}
        >
          {url.href}
        </a>
      </section>
      <hr />
      <section>
        <p className='indent-4 py-4 text italic'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
          aperiam recusandae sit rem perferendis sed. Similique nam non nemo
          assumenda a ex architecto neque minima, corporis, eveniet voluptates
          quae et?
        </p>
      </section>
    </div>
  )
}
