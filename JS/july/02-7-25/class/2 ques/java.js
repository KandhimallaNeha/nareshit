const pallindrome=()=>
{
    n=+prompt("enter number:")
    temp=n;
    sum=0
    while(temp!=0){
        rem=parseInt(temp%10)
        sum=(sum*10)+rem
        temp= parseInt(temp/10)
    }
    if(n==sum)
    {
        return true
    }
    else{
        return false
    }
}
if(pallindrome())
{
    console.log("pallindrome")
}
else{
    console.log("not pallindrome")
}