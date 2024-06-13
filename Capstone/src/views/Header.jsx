import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className='flex  justify-center items-center gap-2 bg-[#495F58] text-slate-100 w-full h-[320px] mb-[100px]'>
        <div className='ml-auto p-3'>
            <h1 className='text-[#C3A50F] text-4xl font-bold px-2'>Little Lemon</h1>
            <p className='px-4 font-light text-slate-300'>Chicago</p>
            <p className='p-2 max-w-[500px]'>Welcome to Little Lemon, Chicago's cozy haven for fresh, delicious cuisine. Experience a delightful blend of flavors in a warm, inviting atmosphere. Perfect for every occasion!</p>
            <Link to={"/booking"}>
            <button
            className='bg-[#f9d316] text-slate-900 py-2 px-4 rounded m-3 font-semibold hover:bg-[#ffe100] duration-300'>
                Reserve a Table
            </button>
            </Link>
        </div>
        <div className='mr-auto p-3'>
            <img src="assets/restauranfood.jpg" className='w-[200px] mt-16 shadow-neutral-600/80 shadow-2xl'/>
        </div>

    </header>
  )
}

export default Header