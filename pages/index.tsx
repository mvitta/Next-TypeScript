import Grid from '../components/Grid'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '100',
  style: 'normal',
  subsets: ['latin'],
})

export default function Home({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  console.log(children)

  return (
    <main className={roboto.className}>
      <section className='dark:bg-black dark:shadow-neutral-50 w-full bg-white p-8 border-b- border-double shadow border-orange-600 mb-8'>
        <h1 className='text-4xl font-bold text-white bg-orange-700 text-center p-4 shadow-lg shadow-orange-700'>
          <a href='https://randomfox.ca/' target='_blank' className='deco'>
            randomfox.ca
          </a>
        </h1>
        <div className='border'></div>
      </section>
      <Grid />
    </main>
  )
}
