import React from 'react'

const Navbar = ({filterItem,navList}) => {
  return (
    <>
    <nav className='navbar'>
      <div className='btn-group'>
        {/* <button className='btn btn1' onClick={()=> setMenuData(Menu)}>All</button> */}
        {navList.map((ele)=>{
        return(
          <button className='btn btn2' onClick={()=> filterItem(ele)}>{ele}</button>
          )

        })}
        {/* <button className='btn btn3' onClick={()=> filterItem("Breakfast")}>Breakfast</button> */}
      </div>
    </nav>
    </>
  )
}

export default Navbar
