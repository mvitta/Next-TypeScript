interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  tag: string
}

export default function Button({ tag, ...ButtonProps }: Props) {
  return (
    <button
      className='bg-orange-700 py-2 px-4 rounded text-white font-bold font hover:ring-2 ring-orange-700 hover:bg-white hover:text-orange-700'
      {...ButtonProps}
    >
      {tag}
    </button>
  )
}
