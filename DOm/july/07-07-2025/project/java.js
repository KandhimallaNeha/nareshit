const count=document.getElementById('count');
let c=0;
function incr ()
{
    if(c<=20)
{
    c++;
    count.textContent=c
}
else{
 alert("stop");
    return;
}
}
function decr ()
{
    
    if(c>=-2){
c--;
    count.textContent=c
    }
        else
{
    alert("plz stop");
    return;
}
}
function reset ()
{
    c=0;
    count.textContent=c
}

