let n=parseInt(prompt(" totalSpending = "))
if(n>=1000){
    console.log("Customer's total spending: $"+n+" Loyalty Tier: Platinum.")
} else if(n>=500){
    console.log("Customer's total spending: $"+n+" Loyalty Tier: Gold.")
}else {
    console.log("Customer's total spending: $"+n+" Loyalty Tier: Silver.")

}