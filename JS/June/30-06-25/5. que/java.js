let n=+prompt("enter year:")
if(n%4==0){
    if(n%400==0 && n%100!=0){
        console.log("leap year")
    }
    else{
         console.log("not leap year")
    }
}