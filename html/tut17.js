console.log("this is tutorial 17 on Events");
document.getElementById('heading').addEventListener('click',function(e){
  console.log("you have click the heading");
  location.href=''
  console.log(e);
});