let n=(prompt("userType = "))
if(n=="moderator"){
    console.log("User Type: moderator . Permissions: Moderate comments and manage user reports.")
}
else if(n=="administrator"){
    console.log("User Type: administrator . Permissions: View all content, post comments, and create personal profiles.")
}
else if(n=="registered"){
    console.log("User Type: registered . Permissions: View all content, post comments, and create personal profiles.")
}
else if(n=="guest"){
    console.log("User Type: guest . Permissions: View public content only.")
}