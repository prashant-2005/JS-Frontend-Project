var stranger = document.querySelector("h5");
var btn = document.querySelector("button");
var img = document.querySelector("img");
var check = 0;

btn.addEventListener("click", function(){
    stranger.innerHTML = "Request Sending..."
    stranger.style.color = "yellow"
    btn.innerHTML = "Adding..."


    if(check == 0){
        setTimeout(function(){
        stranger.innerHTML = "Friend";
        stranger.style.color = "green";
        btn.innerHTML = "Remove Friend";
        img.style.borderColor = "darkgreen"
        check = 1
        },2000)
        
    }else{
        stranger.innerHTML = "stranger";
        stranger.style.color = "red";
        btn.innerHTML = "Add Friend";
        img.style.borderColor = "red"
        check = 0
    }
})