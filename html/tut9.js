
/* for while do while,continue,switch,break,foreach*/
for(let i=0;i<100;i++)
{
    if(i==5)
    {
        break;
    }
    console.log(i);
}
j=100;
while(j<150)
{
    if(j==105)
    { 
        j=j+1;
        continue;
    }
    console.log(j); 
    j=j+1;
}k=100;
do{
    console.log(k+1);
    k=k+1;
}
while(k<10);

let arr=[11,12,13,14,15,16,17,18,19,20];
/* printing array using foreach loop
arr.forEach(function(element)
{
    console.log(element);
});*/
for(let i=0;i<arr.length;i++)
{
      let element=arr[i];
     console.log(element);

}
let people=
{
    'name':"vishal jare",
    'age':22,
    'subject':"javascript",
    'os':"ubantu"
}
for( let key in people)
{
    console.log(`the ${key} is ${people[key]}`);
}