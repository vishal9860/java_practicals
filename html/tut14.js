console.log("element selector");
/*single selector*/
/*multiline selector*/
document.getElementById("vishal").innerHTML="HI AM VISHAL";
        document.getElementById("vishal").innerHTML="HI AM VISHAL";
        let ele=document.getElementById('sus');
        console.log(ele);
        ele.style.color='red';
        ele.innerText="harry is good boy";
        ele.innerHTML='<b> harry is good boy</b>';
        ele.style.border='2px solid green';
        console.log(ele);
      let sel = document.querySelector('#vis');
      sel=document.querySelector('div');
      console.log(sel);
      /* multilne selectotr*/
      let elem=document.getElementsByClassName('child');
      console.log(elem);
      elemst=document.getElementsByClassName('container')
      console.log(elem[0]);
      console.log(elem[1]);
      console.log(elem[2]);
      console.log(elem[3]);
      console.log(elem[0].getElementsByClassName('child'));
      elems=document.getElementsByTagName('div')
      Array.from(elems).forEach(element =>
      {
        console.log(element);
          elemment.style.color="blue";
      });
