
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 


let shoppingList = {
    "banana": 1,
    "orange": 1,
    "apple": 1,
}

console.log(stock);



function myBill(){

    let amount = 0;
    let result = ` `;
    for(let item in shoppingList)
    {
        amount += stock[item] * shoppingList[item];

        if(stock[item] > 0)
        {
            stock[item] -=  shoppingList[item]
            result += `${item} est disponible. ${item} coûte : ${prices[item]} ; \n `
        }else
        {
            result += `${item} est indisponible; \n `
        }
    }

    return console.log(`${result} \n cout total : ${amount}`);
}


myBill();

console.log(stock);