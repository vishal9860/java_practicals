//string in javascript

console.log("we are at tutorial 6");
const name="vishal";
const greeting="good morning";
console.log(greeting + ' ' + name);
let html;
html="<h1> This My Heading</h1>"+
"<p> This is My Para</p>";
html=html.concat('this');
console.log(html);
console.log(html.length);
console.log(html.toLocaleLowerCase());
console.log(html);
console.log(html[1]);
console.log(html[2]);

console.log(html.indexOf('<'));
console.log(html.lastIndexOf('<'));
console.log(html.charAt(3));
console.log(html.includes('fg'));
console.log(html.substring(0,12));
console.log(html.slice(0,4));
console.log(html.replace('this','it'));
console.log(html.search('it'));
