
function makeEazy(price,pName){
    takeValueAndseat(price);
    const product =document.getElementById(pName).innerText;
    list(product);
    
}



// .....for make the list of purchase products---
function list(product,){

const listEantry = document.getElementById("product-list");
const p=document.createElement('p');
const count =listEantry.childElementCount
p.innerHTML=`${count+1}  ${product} `
listEantry.appendChild(p);
enable(count);

}

// ........ for enable purchase button...

function enable(count){
    const btnPurchase =document.getElementById("Purchase")
if(count>=0){
    btnPurchase.removeAttribute('disabled')
    btnPurchase.style.backgroundColor="rgb(236 72 153)"
    
}
else{
    btnPurchase.setAttribute('disabled','disabled')
    btnPurchase.style.backgroundColor=""
}
}