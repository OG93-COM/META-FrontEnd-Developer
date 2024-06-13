
const MenuItems = ({menuImg, menuTitle, menuPrice, menuCtn}) => {
  return (
    <div className="w-[337px] h-[450px] bg-[#EEF4F2] rounded-xl hover:shadow-lg duration-300">
            <img src={menuImg} className='h-[213px] w-[337px] rounded-t-xl mb-4'/>
            <div className='px-5'>
                <div className='flex justify-between px-4 mb-3 '>
                    <p className='font-semibold text-xl'>{menuTitle}</p>
                    <span className='font-semibold text-l text-[#FF8025]'>{menuPrice}</span>
                </div>
                <p className='my-5'>{menuCtn}</p>
                <a href='#' className='px-5 font-semibold'>Order a Delivery</a>
            </div>
        </div>
  )
}

export default MenuItems