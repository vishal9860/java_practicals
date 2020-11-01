//if else statement
const age=20;
const doesdrive="false";
/*if(age==20)
{
    console.log(" i am 20");

}
else if(age==25)
{
    console.log("i am 25");
}
else if(age==30)
{
    console.log(" i am 30");
}
else
{
    console.log("not valid");
}*/
if(doesdrive || age>18)
{
    console.log("You can drive");
}
else{
    console.log("you cannot drive");
}
switch(age)
{
    case 18:
        console.log("you are 18");
        break;
    case 20:
        console.log("you are 20");
        break;
    case 30:
        console.log("you are 30");
        break;
    default:
        break;
}