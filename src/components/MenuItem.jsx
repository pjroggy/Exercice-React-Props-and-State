import React, { useState } from "react";

function MenuItem({ foodItem }) {
    //create a state isFavorite that has the inital value of isFavorite that comes from the props
    const { itemName, description, foodImage, price, isFavorite, } = foodItem;
    const [isFavourite, setIsFavourite] = useState(foodItem.isFavorite);
    
    const handleClick = (isFavourite) => setIsFavourite(!isFavourite);
    console.log(isFavourite);
    return (
        <section className="itemContainer">
            <figure className="imgContainer">
                {/* the image will receive the url src from the props */}
                <img src={foodImage} alt={itemName} />
                <figcaption>
                    {/* the h2 will receive the item name from the props */}
                    <h2>{ itemName}</h2>
                    {/* the p will receive the item description from the props */}
                    <p>{ description}</p>
                </figcaption>
            </figure>
            {/* the span will receive the item price from the props */}
            <span>{ price} EUR</span>

            {/* the button to play with the isFavorite state:
              - onClick, will toggle the isFavorite state,
              - content will be conditionally rendered as "❤️" or "🖤", depending on the value of isFavorite
          */}
            <button type="button" onClick={() => handleClick(isFavourite)} >{isFavourite?"❤️":"🖤"}</button>
        </section>
    ); 
}

export default MenuItem;