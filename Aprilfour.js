function myfunction()
{
	let user = prompt("who's there",'');
if(user == "Admin"){
    let pwd = prompt("enter password");
    if(pwd == 123){
        alert("Welcome");
    }
    else if(pwd == null|| pwd == ''){
        alert("Cancelled");
    }
    else
    {
        alert("wrong password");
    }
}
else if(user == null||user == ''){
    alert("Cancelled");
}
else{
    alert("I don't know you!");
}
}