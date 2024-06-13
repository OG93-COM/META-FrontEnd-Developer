
const Header = () => {
  return (
    <header className='flex justify-center items-center gap-20 bg-[#495F58] text-slate-100 w-full h-[300px] mb-[100px]'>
        <div className='ml-auto p-3'>
            <h1 className='text-[#C3A50F] text-4xl font-bold px-2'>Littel Lemon</h1>
            <p className='px-4 font-light text-slate-300'>Chicago</p>
            <p className='p-2 max-w-[500px]'>Welcome to Little Lemon, Chicago's cozy haven for fresh, delicious cuisine. Experience a delightful blend of flavors in a warm, inviting atmosphere. Perfect for every occasion!</p>
            <button className='bg-[#f9d316] text-slate-900 py-2 px-4 rounded m-3 font-semibold hover:bg-[#ffe253]'>Reserve a Table</button>
        </div>
        <div className='mr-auto p-3'>
            <img src="assets/restauranfood.jpg" className='w-[200px] mt-10 relative'/>
        </div>
        
    </header>
  )
}

export default Header