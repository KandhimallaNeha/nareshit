let tic = parseInt(prompt("number of tickets: "))
let age = parseInt(prompt("age of the passenger: "))
 let price=tic*300;
age >= 60 && age <= 100 ? console.log("Total cost before discount: Rs."
    +price+"\n Discount amount: Rs."+((price*20)/100)+"\n Total cost after discount: Rs. "+(price-((price*20)/100)))
: console.log("Total cost before discount: Rs."
    +price+"\n Discount amount: Rs."+0.00+"\n Total cost after discount: Rs. "+price);