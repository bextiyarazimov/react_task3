import React, { useState } from 'react'
import classes from  './productItem.module.scss';
import product_1 from "../../assets/images/image-1.jpg"
import product_2 from "../../assets/images/image-2.jpg"
import product_3 from "../../assets/images/image-3.jpg"
import product_4 from "../../assets/images/image-4.jpg"
import product_5 from "../../assets/images/image-5.jpg"

const ProductItem = () => {

const [counter,setCounter] = useState(1);
const [productPrice, setProductPrice] = useState(125);
const [cartData,setCartData] = useState([]);
const handleInc = ()=> {
    setCounter((prev)=> prev + 1);

};

const handleDec = ()=> {
    setCounter((prev)=> prev - 1);
    
};

const handleAddToCart = () => {
    setCartData({ product_name: "Samsung" });
};

console.log(cartData)

  return (
    <div className="container"> 
    <div className={classes.product}>
<div className={classes.product_images}>
<div className={classes.main_image}>
    <img src={product_1} alt="" />
    </div>
<div className={classes.image_container}>
<div className={classes.image_container_item}>
    <img src={product_2} alt="" />


</div>

<div className={classes.image_container_item}>
    <img src={product_3} alt="" />
</div>

<div className={classes.image_container_item}>
    <img src={product_4} alt=""/>
</div>

<div className={classes.image_container_item}>
<img src={product_5} alt=""/>

</div>
</div>

</div>



<div className={classes.product_content}>
<h2 className={classes.product_content_title}>Product Title</h2>
<h2 className={classes.product_content_desc}>Lorem ipsum dolor sit amet consectetu5655.</h2>
<h2 className={classes.product_content_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque fuga alias quae voluptatum nihil, officia aperiam tempora suscipit autem necessitatibus, voluptates ducimus culpa. Debitis, velit. Quo voluptate itaque voluptatem soluta.</h2>
<p className={classes.product_content_price}>{counter*productPrice}</p>
<div className={classes.product_content_counter}>
<button className={classes.product_content_counter_dec} onClick={handleDec}>-</button>
<button className={classes.product_content_counter_val}>{counter}</button>
<button className={classes.product_content_counter_inc} onClick={handleInc}>+</button>
<button className={classes.product_content_btn} onClick={handleAddToCart}>Add to cart </button>

</div>


</div>



    </div>

    
    
    
    </div>
  )
}

export default ProductItem
