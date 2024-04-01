import React, { Component } from 'react';
import MenuItem from "./MenuItem";

function MenuList({ foodItems }) {
  return (
    <>
      {/*render a MenuItem component to each element of the props array*/}
        {foodItems.map((foodItem) =>  <MenuItem key={foodItem.itemName} foodItem = {foodItem}/> )}
    </>
  );
}

export default MenuList;