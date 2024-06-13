
import MenuItems from '../components/MenuItems'

const menus = [
    {
        name: "Geek Salad",
        description: "Enjoy a refreshing Greek Salad with crisp lettuce, juicy tomatoes, cucumbers, olives, and feta cheese, all drizzled with a zesty vinaigrette",
        price: "12.95$",
        imgUrl:"../assets/greek salad.jpg"
    },
    {
        name: "Bruschetta",
        description: "Savor our classic Bruschetta, featuring toasted bread topped with a vibrant mix of tomatoes, basil, garlic, and a splash of balsamic",
        price: "5.90$",
        imgUrl:"../assets/Bruschetta.jpeg"
    },
    {
        name: "Lemon Dessert",
        description: "Delight in our Lemon Salad, a tangy blend of greens, lemon slices, and a light, citrusy dressing that brightens up your palate",
        price: "5.00$",
        imgUrl:"../assets/lemon dessert.jpg"
    },

]

const Main = () => {

  return (
    <main className='mt-14'>
        <div className='flex justify-center items-center'>
            <h1 className='font-semiblod text-3xl mx-auto'>Special</h1>
            <button className='bg-[#f9d316] text-slate-900 py-2 px-4 rounded font-semibold mx-auto hover:bg-[#ffe253]'>Online Menu</button>
        </div>
      
      <section className='flex justify-center items-center mt-5 gap-5 flex-wrap	'>
        {menus.map(menu => {
            return <MenuItems menuImg={menu.imgUrl} menuTitle={menu.name} menuPrice={menu.price} menuCtn={menu.description}/>
        })}

      </section>
    </main>
  )
}

export default Main