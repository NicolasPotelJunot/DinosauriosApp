
export const Input = ({
    type,
    placeholder,
    name

}) => {

  return (

    <input 
        className='mx-auto bg-gray-100 w-3/4 block shadow shadow-slate-300 rounded-xl p-3 border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-300 sm:text-sm focus:ring-1 transition'
        type={type}
        placeholder={placeholder}
        name={name} 
        />

  )
}
