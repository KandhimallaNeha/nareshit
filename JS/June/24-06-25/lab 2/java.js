let n = prompt("Enter password:")
if (n.length>=8){
    console.log("Password meets minimum length requirements. Good job!")
}
else{
    console.log("Password is too short. Please use at least 8 characters.")
}