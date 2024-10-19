import React, { useState } from "react";
import { useEffect } from "react";

const Effect=()=>{
    const [b,setb]=useState(0)
    useEffect(()=>{
        async function API(){
            const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0445612&lng=77.57268839999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            const OriginalData=await data.json()
            console.log(OriginalData)
        }
        API()
    },[])
   
    return <div>
        <h3 onClick={()=>{
            setb(b+1)
        }}>{b}</h3>
        <button onClick={()=>{
            setb(b+1)
        }}>Click Here</button>
    </div>
}
export default Effect;