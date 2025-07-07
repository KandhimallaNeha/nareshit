const primeornot=()=>
{
    n=+prompt("enter a number")
    c=0;
    for(i=1;i<=n;i++){
        if(n%i==0)
        {
            c++
        }
    }
    if(c==2)
    {
        return true;
    }
    else{
        return false;
    }
}
if(primeornot()){
    console.log("prime number")
}
else {
     console.log("not prime number")
}