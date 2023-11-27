//function
function interest(){
    //setting variables
    let amount = +prompt('Enter your amount')
    let percent = +prompt('Enter your percentage')

//formula for the interest
    let interest = amount * percent/100
    //logging results
    console.log(interest);
}

interest()