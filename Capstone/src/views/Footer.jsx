import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className='grid grid-cols-3  flex-wrap justify-center items-center mx-auto mt-10 bg-[#495F58] text-slate-100 w-full h-[180px]'>
        <div className="w-[60px] mx-auto">
        <Link to={"/"}> <img src="assets/logo-footer.png" alt="logo"/></Link>
        </div>
        <div className="mx-auto">
            <p className="font-bold my-2">Navigation</p>
            <ul className="font-light">
                <li>About</li>
                <li>Menu</li>
                <li><Link to={"/booking"}>Reservation</Link></li>
                <li>Order Online</li>
            </ul>
        </div>
        <div className="mx-auto">
            <p className="font-bold my-2">Contact</p>
            <ul className="font-light">
            <li>Adress</li>
            <li>Phone Number</li>
            <li>Email</li>
            <li>Social Media</li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer