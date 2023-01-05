

function changeEnough(itemPrice, amountOfChange){

    const listOfCoefficients = [0.25, 0.10, 0.05, 0.01];

    let newPrice = 0;

    if(Array.isArray(amountOfChange)  && listOfCoefficients.length != amountOfChange.length)
    {
        return console.log(`Veuillez fournir tableau de ${listOfCoefficients.length} montant`);
    }

    for (let elt = 0; elt<amountOfChange.length; elt++ ) {
        
        let price =  Number(amountOfChange[elt]);

        if (isNaN(price)) {
            price = 0;            
        }

        newPrice = newPrice +  price * listOfCoefficients[elt];

   }

   if (itemPrice <= newPrice) {
        return console.log(true);
   }else{
    return  console.log(false); 
   }
}


changeEnough(14.11, [2,100,0,0]);

changeEnough(0.75, [0,0,20,5]);