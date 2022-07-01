import React from "react";

const MenuCard = ({ menuData }) => {
  return (
    <>
      {menuData.map((ele) => {
        const { id, category, name, discription, image, price } = ele;
        return (
          <div className="container">
            <div className="container-num">{id}</div>
            <div className="menu-type">{category}</div>
            <div className="name">{name}</div>
            <div className="discription">
              {discription}
              <hr />
            </div>
            <img src={image} alt="" />
            <div className="bottom">
              <div className="price"> &#x20B9; {price}</div>
              <input type="button" value="Order" />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MenuCard;
