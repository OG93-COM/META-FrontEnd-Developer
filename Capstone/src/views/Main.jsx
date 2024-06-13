import geekSalad from '../assets/greek salad.jpg'

const Main = () => {
  return (
    <main className='m-14'>
      <h1 className='font-semiblod text-3xl '>Special</h1>
      <div className="w-[337px] h-[450px] bg-[#EEF4F2] rounded-xl">
        <img src={geekSalad} className='h-[213px] w-[337px] rounded-t-xl my-4'/>
        <div className='px-5'>
            <div className='flex justify-between px-4 mb-3 '>
                <p className='font-semibold text-xl'>Geek Salad</p>
                <span className='font-semibold text-l text-[#FF8025]'>12.95$</span>
            </div>
            <p className='my-5'>Enjoy a refreshing Greek Salad with crisp lettuce, juicy tomatoes, cucumbers, olives, and feta cheese, all drizzled with a zesty vinaigrette</p>
            <a href='#' className='px-5 font-semibold'>Order a Delivery</a>
        </div>
      </div>

    </main>
  )
}

export default Main