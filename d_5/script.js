document.body.style.backgroundColor = "green";
document.body.style.color = "white";
// document.body.p.style.backgroundColor="blue"; will not work

document.body.style.fontSize="25px";
document.title="New Title";

const a = document.body.style;
a.backgroundColor="blue";

const uname="JohnDoe";
document.title=`${uname} - Dashboard`; // changing title according to username

const b=document.body;
b.firstChild;  // #text
b.lastChild;


b.firstElementChild;  // h1
b.lastElementChild;

b.firstElementChild.childNodes; // NodeList(3) [h1, #text, p]

b.firstElementChild.style.backgroundColor="yellow";
b.firstElementChild.style.color="black";

document.getElementById("box2").style.backgroundColor="pink";

const con=document.getElementById("box2");
con.style.color="red";
con.style.fontSize="30px";
con.innerHTML="<h3>This is Box 2</h3>"; // changes the inner HTML of box2

const con2=document.getElementById("container");
con2.innerHTML='<h1 id="textChange">This is using innerHTML</h1>';
document.getElementById("textChange").innerHTML='Hello World!';