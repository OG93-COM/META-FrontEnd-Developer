import React from 'react'
import MenuItems from './MenuItems'

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

const Special = () => {
  return (
    <div className='flex justify-center items-center mt-5 gap-5 flex-wrap	'>
        {menus.map(menu => {
            return <MenuItems menuImg={menu.imgUrl} menuTitle={menu.name} menuPrice={menu.price} menuCtn={menu.description}/>
        })}
      </div>
  )
}

export default Special