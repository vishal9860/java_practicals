//* FUNCTION IN JAVASCRIPT*/
function greet(name,thank='thank you')
{
    let message=`happy  birthaday ${name}
     How i wish I could Fly to You Right Now and be with you 
     on this special day ${thank}`
     return message;

}
 let name="vishal";
let val=greet(name);
console.log(val);
const obj =
{
    'name':"vishal jare",
    game:function()
    {
        return "jare";
    }
}
/* this is object contain key value pair like variable name and its value
so object are also contain function*/

console.log(obj.game());
let arrs=["fruits","vegetables","furniture","plywood","books","mutton","rice"];
arrs.forEach(function(element,index,array)
{
    console.log(element,index,array)
});