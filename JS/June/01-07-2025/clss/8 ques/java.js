function n(){
    c=0;
    n=+prompt("enter number")
    for(i=1;i<=n;i++){
        if(n%i==0)
        {
            c++;
        }
    }
    if(c==2){
        console.log("prime number")
    }
    else{
        console.log("not prime number")
    }
}
res=n();
console.log(res)
