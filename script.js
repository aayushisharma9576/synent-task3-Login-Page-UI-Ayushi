function showSignup(){
document.getElementById("loginBox").classList.add("hidden");
document.getElementById("signupBox").classList.remove("hidden");
document.getElementById("msg").innerText="";
}
function showLogin(){
document.getElementById("signupBox").classList.add("hidden");
document.getElementById("loginBox").classList.remove("hidden");
document.getElementById("msg").innerText="";
}
function signup(){
let name=document.getElementById("signupName").value;
let email=document.getElementById("signupEmail").value;
let password=document.getElementById("signupPassword").value;
if(name===""||email===""||password===""){
showMessage("Please fill all fields","red");
return;
}
let user={
name:name,
password:password
};
localStorage.setItem(email,JSON.stringify(user));
showMessage("Account Created Successfully","lightgreen");
setTimeout(showLogin,1000);
}
function login(){
let email=document.getElementById("loginEmail").value;
let password=document.getElementById("loginPassword").value;
let user=JSON.parse(localStorage.getItem(email));
if(user && user.password===password){
showMessage("Welcome " + user.name,"lightgreen");
}
else{
showMessage("Invalid Email or Password","#ff8080");
}
}
function showMessage(message,color){
let msg=document.getElementById("msg");
msg.innerText=message;
msg.style.color=color;
}