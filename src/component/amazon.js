import React,{useState} from "react";
import list from "../data";
import Cards from "./card";
import "../styles/amazon.css";




const Amazon = () => {
const[cart,setCart]= useState([]);

const handleClick=(item) =>{

cart.push(item);
    console.log(item);
};

    return (
        <section> 

            { list.map((item)=>(
                
                <Cards key = {item.id} item = {item}  handleclick={handleClick}/>


                )) }
        </section>
        );
    // <h1>Check</h1>;
};

export default Amazon;