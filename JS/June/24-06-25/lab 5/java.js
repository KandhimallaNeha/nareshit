let n=parseInt(prompt("vehicleSpeed = "))
if(n<=30){
    console.log(" Vehicle speed: "+n+"km/h. Classification: slow")
}else if(n>=30 && n<60){
    console.log(" Vehicle speed: "+n+"km/h. Classification: normal")
}
else if(n>=60 && n<=90){
    console.log(" Vehicle speed: "+n+"km/h. Classification: fast")
}
else{
    console.log(" Vehicle speed: "+n+"km/h. Classification: Excessive")
}