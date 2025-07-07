let n1="CAT";
let n2="ACT";
let n3=0;
for(i=0;i<=n1.length-1;i++){
    for(j=0;j<=n2.length-1;j++){
        if(n1[i]==n2[j]){
            n3++;
        }
    }
}
if(n3==3){
    console.log("Helo")
}

