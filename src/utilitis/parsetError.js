
import React from 'react'

let styles = {
  fontWeight: "bold",
  color: "#dc3545",
};
const parsetError = (e,erroscis) => {
   const $inputs = document.querySelectorAll("input[data-id]");
   const $span = document.createElement("sapn")
   $span.style.setProperty("font-weight","bold")
   $span.style.setProperty("color", "#dc3545");
   $span.textContent = "El CI esta mal"
   document.addEventListener("change",(e)=>{
      $inputs.forEach((el)=>{
        console.log("ver err", erroscis)
         if(e.target === el && erroscis?.cis ){
             $span.textContent = `${erroscis?.cis}`;
             el.insertAdjacentElement("afterend",$span)
         }
      })  
   })
   console.log("ver $inputs", $inputs)
}

export default parsetError