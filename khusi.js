var ai=Math.floor(Math.random()*7);
var user=Math.floor(Math.random()*7);
var text=document.querySelector("h3");
var aiImage=document.getElementsByClassName("img")[0];
var userImage=document.getElementsByClassName("img")[1];

if(ai===0){
  ai=1;
}
if(user===0){
  user=1;
}

if(ai===user){
  text.textContent="Match is tie";
  aiImage.setAttribute("src","images/"+ai+".png");
  userImage.setAttribute("src","images/"+user+".png");
}
else if(ai>user){
  text.textContent="AI wins";
  aiImage.setAttribute("src","images/"+ai+".png");
  userImage.setAttribute("src","images/"+user+".png");
}
else if(ai<user){
  text.textContent="Congrats you win";
  aiImage.setAttribute("src","images/"+ai+".png");
  userImage.setAttribute("src","images/"+user+".png");
}
