document.querySelector('.minus-btn1').setAttribute("disabled","disabled")
document.querySelector('.minus-btn2').setAttribute("disabled","disabled")

   var valueCount1 = 1
   var valueCount2 = 1
   var price1 = document.getElementById('price1').innerText;
   var price2 = document.getElementById('price2').innerText;
   var ammount = document.getElementById('totalAmmount').innerText;
 
   document.querySelector(".plus-btn1").addEventListener("click",function(){
       valueCount1 = document.getElementById('qty1').value;
       valueCount1++;
       document.getElementById("qty1").value = valueCount1;
       document.getElementById('price1').innerText = valueCount1 * price1;
       if(valueCount1 > 1){
           document.querySelector('.minus-btn1').removeAttribute("disabled")
           document.querySelector('.minus-btn1').classList.remove("disabled")
       }
       ammount = valueCount1 * price1 + valueCount2 * price2;
       document.getElementById('totalAmmount').innerText = ammount;
   }) 
   document.querySelector(".plus-btn2").addEventListener("click",function(){
       valueCount2 = document.getElementById('qty2').value;
       valueCount2++;
       document.getElementById("qty2").value = valueCount2;
       document.getElementById('price2').innerText = valueCount2 * price2;
      if(valueCount2 > 1){
           document.querySelector('.minus-btn2').removeAttribute("disabled")
           document.querySelector('.minus-btn2').classList.remove("disabled")
       } 
       ammount = valueCount1 * price1 + valueCount2 * price2;
       document.getElementById('totalAmmount').innerText = ammount;
   })

   document.querySelector(".minus-btn1").addEventListener("click",function(){
       valueCount1 = document.getElementById('qty1').value;
       valueCount1--;
       document.getElementById("qty1").value = valueCount1;
       document.getElementById('price1').innerText = valueCount1 * price1;
       if(valueCount1 == 1){
           document.querySelector('.minus-btn1').setAttribute("disabled","disabled")
       }   
       ammount = valueCount1 * price1 + valueCount2 * price2;
       document.getElementById('totalAmmount').innerText = ammount;    
   })
   document.querySelector(".minus-btn2").addEventListener("click",function(){
       valueCount2 = document.getElementById('qty2').value;
       valueCount2--;
       document.getElementById("qty2").value = valueCount2;
       document.getElementById('price2').innerText = valueCount2 * price2;
       if(valueCount2 == 1){
           document.querySelector('.minus-btn2').setAttribute("disabled","disabled")
       }
       ammount = valueCount1 * price1 + valueCount2 * price2;
       document.getElementById('totalAmmount').innerText = ammount;
   })

   var buttons = document.getElementsByClassName('remove');

   for(i=0; i<buttons.length; i++){
      var button = buttons[i];
      button.addEventListener('click', function(e) {
          e.target.parentElement.remove();
      })
   }
  