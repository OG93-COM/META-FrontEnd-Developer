import headerImg from '../assets/restauranfood.jpg'

const Header = () => {
  return (
    <header className='flex justify-center items-center gap-20 bg-[#495F58] text-slate-100 w-full h-[300px]'>
        <div className='w-[50%]'>
            <h1 className='text-[#C3A50F] text-4xl font-bold p-1'>Littel Lemon</h1>
            <p className='p-2'>Chicago</p>
            <p className='p-1 max-w-[500px]'>Welcome to Little Lemon, Chicago's cozy haven for fresh, delicious cuisine. Experience a delightful blend of flavors in a warm, inviting atmosphere. Perfect for every occasion!</p>
            <button className='bg-[#f9d316] text-slate-900 py-2 px-4 rounded m-3 font-semibold'>Reserve a Table</button>
        </div>
        <img src={headerImg} className='w-[200px] mt-10'/>
    </header>
  )
}

export default Header