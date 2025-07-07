// const checkPassword=()=>
// {
//     pass=prompt("enter password:")
   
//     if(pass.length>=8)
//     {
//         for(i=0;i<=pass.length-1;i++){
//         if((pass[i]>='0' && pass[i]<='9') && (pass[i]>='a' && pass[i]<='z'))
//         {
//             return true;
//         }
//         }
//     }
//     return false;
// }

function checkPassword(str,minLen)
{
    if(str.length<minLen)
    {
        return false;
    }
    let charPres=false;
    let digPres=false;
    for(let i=0; i<str.length; i++)
    {

        if(str[i]>='0' && str[i]<='9')
        {
           digPres=true;
        }
        else if(str[i]>='a' && str[i]<='z')
        {
            charPres=true;
        }
    }
    if(charPres && digPres)
    {
        return true;
    }
    else{
        return false;
    }
}


let str=prompt('Enter String ');
let len=+prompt('Enter Length');
let status=checkPassword(str,len);
if(status)
{
    console.log('strong pass');
}
else{
    console.log('Weak')
}