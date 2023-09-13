
// --for take the price and seat to total-price----
function takeValueAndseat(id){
    const value =parseFloat(document.getElementById(id).innerText);
    
    const a= parseFloat(document.getElementById("Total-price").innerText) 
      
      document.getElementById("Total-price").innerText= a+value;
    //   ....froe enable apply button call click function....
     const b= document.getElementById("Total-price").innerText
     disabled(b)
    
   
}
//  ---- disabled for  the promo code-----
function disabled(b){
    const btn=document.getElementById('btn-apply')
    if(parseFloat(b) >= parseFloat(200)){
        btn.removeAttribute('disabled')
        btn.style.backgroundColor="rgb(236 72 153)"
        
    }
    else{
        btn.setAttribute('disabled','disabled')
        btn.style.backgroundColor=""
    }
}





// .....for discount.....
function Discount(){
    
    const tocan= document.getElementById("input-fild").value;
     
    
        if(tocan=='SELL200'){
            const totalPrice =parseFloat(document.getElementById("Total-price").innerText)
            document.getElementById("discount").innerText = (totalPrice*0.2).toFixed(2)
            document.getElementById('Total').innerText=totalPrice-totalPrice*0.2}
            
        else {
            alert("your promo code is not right.Pleas try another promo code")
        }
            
    
    
    document.getElementById("input-fild").value='';
} 
   
   
//........ for real by go home button ......
function reload(){
    location.reload;
    document.getElementById("product-list").innerHTML='';
    document.getElementById("Total-price").innerText='00.00';
    document.getElementById("discount").innerText='00.00';
    document.getElementById("Total").innerText='00.00';
    document.getElementById("input-fild").value="";
    enable(-1);
    disabled(0);
}







