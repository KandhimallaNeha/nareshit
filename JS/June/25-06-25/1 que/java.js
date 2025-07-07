let mem=(prompt("isMember "))
let pur=(parseInt(prompt("purchaseTotal ")))
if(mem==="true"){
    console.log("User is a member.")
  if(pur>=200){
    console.log("Qualifies for a 15% member discount!")
    console.log("Original Price: $",pur,", Final Price: $",(pur-(pur*0.15)))
  }
  else if(pur>=100){
     console.log("Qualifies for a 10% member discount!")
    console.log("Original Price: $",pur,", Final Price: $",(pur-(pur*0.10)))
  }
  else{
    console.log("No discount available for this purchase.")
  }
}
else{
    console.log(" User is not a member. No member discounts apply.")
    if(n>=500){
        console.log("Qualifies for a 5% general discount on large order.")
        console.log("Original Price: $",pur,", Final Price: $",(pur-(pur*0.5)))
    }
    else{
      console.log("User is not a member. No member discounts apply.")
      console.log("Original Price: $",pur,", Final Price: $",pur)
    }
}