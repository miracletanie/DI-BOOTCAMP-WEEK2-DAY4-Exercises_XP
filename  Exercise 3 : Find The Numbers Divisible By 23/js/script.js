
function isDivisible(){

    let sum = 0;
    let Outcome = 'Outcome : ';

    for (let number = 0; number <= 500; number++) {
        
        if (number % 23 == 0) {
            
            sum += number;
            Outcome = Outcome + " " + number + " ";
        }
        
    }

    console.log(` ${Outcome} \n`);

    console.log(`Sum : ${sum}`);
}

isDivisible();





function isDivisible2(divider){

    if(isNaN(divider))
    {
        return console.log("Veuillez entrer un nombre");
    }
    let sum = 0;
    let Outcome = 'Outcome : ';

    for (let number = 0; number <= 500; number++) {
        

        if (number % divider == 0) {
            sum += number;
            Outcome = Outcome + " " + number + " ";
        }
        
    }

    console.log(` ${Outcome} \n`);

    console.log(`Sum : ${sum}`);
}


isDivisible2(3);

isDivisible2(45);