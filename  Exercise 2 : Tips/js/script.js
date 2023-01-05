


function calculateTip(){
    let amount = prompt("Entrez un montant");

    let amountToNumber = Number(amount)

    if (amountToNumber <= 50 ) {

        let newAmount = amountToNumber * (1 + 0.2)
        return console.log(`Nouveau montant ${newAmount}`);

    }else if (amountToNumber > 50 &&  amountToNumber <= 200) {

        let newAmount = amountToNumber * (1 + 0.15)
        return console.log(`Nouveau montant ${newAmount}`);

    }else if (amountToNumber > 200) {


        let newAmount = amountToNumber * (1 + 0.1)
        return console.log(`Nouveau montant ${newAmount}`);

    }
    else{
        return console.log(`Mettez des chiffres`);

    }
}


// Call the calculateTip() function.
calculateTip()