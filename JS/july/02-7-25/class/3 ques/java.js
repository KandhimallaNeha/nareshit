   arr=[6,4,10]
const accept=()=>
{
   for(i=0;i<=arr.length-1;i++){
    sum=0;
    for(j=i+1;j<=arr.length-1;j++)
    {
        sum=arr[i]+arr[j]

        console.log(finding(sum))
    }
   }
}
const finding=(sum)=>
{
    for(i=0;i<=arr.length-1;i++){
        if(sum==arr[i])
        {
          return arr[i];
        }
    }
}
accept()