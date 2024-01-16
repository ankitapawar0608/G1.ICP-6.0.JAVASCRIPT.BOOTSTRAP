function placeorder(){
    alert("Your Order is placed Successfully");
}



function upadateCaseNumber(product, price, isIncreasing){
    const pastryInput = document.getElementById(product + '-number');
    let pastryNumber = caseInput.value;
            if(isIncreasing){
                pastryNumber = parseInt(pastryNumber) + 1;
            }
            
    else if(pastryNumber > 0){
        pastryNumber = parseInt(pastryNumber) - 1;
         }
        
        caseInput.value = caseNumber;
    // update case total 
    const pastryTotal = document.getElementById(product + '-total');
    pastryTotal.innerText = pastryNumber * price;
    calculateTotal();
    }


    function getInputvalue(product){
        const productInput = document.getElementById(product + '-number');
        const productNumber = parseInt(productInput.value);
        return productNumber;
    }
    function calculateTotal(){
        const cakeTotal = getInputvalue('cake') * 449;
        const pastryTotal = getInputvalue('pastry') * 99;
        const subTotal = cakeTotal + pastryTotal;
        const tax = subTotal / 10;
        const totalPrice = subTotal + tax;

        // update on the html 
        document.getElementById('sub-total').innerText = subTotal;
        document.getElementById('tax-amount').innerText = tax;
        document.getElementById('total-price').innerText = totalPrice;

    }





document.getElementById('pastry-plus').addEventListener('click',function(){
       
   upadateCaseNumber('pastry', 99 ,true);
});

document.getElementById('pastry-minus').addEventListener('click',function(){
   
upadateCaseNumber('pastry', 99, false);
});

// phone prcie update using add event linstner 
document.getElementById('cake-plus').addEventListener('click',function(){
    upadateCaseNumber('cake',449, true);
});


document.getElementById('cake-minus').addEventListener('click',function(){
    upadateCaseNumber('cake',449 , false);
});