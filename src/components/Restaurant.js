import './Restaurant.css'
import React, { useState } from 'react'
import Menu from './MenuApi'
import MenuCard from './MenuCard'
import Navbar from './Navbar'

const uniqueList = ["All",...new Set(Menu.map((ele)=>{
  return ele.category
}))]
console.log(uniqueList)
const Restaurant = () => {
  const [menuData,setMenuData]=useState(Menu)
  const [navList]=useState(uniqueList)

  const filterItem = (category)=>{
    if (category === "All") {
      setMenuData(Menu)
    } else {
      
      const updateItems = Menu.filter((ele)=>{
        return ele.category === category
      })
      setMenuData(updateItems)
    }
  }

  return (
    <>
    <Navbar filterItem={filterItem} navList={navList} />
    <div className='root2' >
      <MenuCard menuData={menuData}/>
    </div>
    </>
  )
}

export default Restaurant
