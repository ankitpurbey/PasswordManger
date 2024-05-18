document.querySelector(".btn").addEventListener("click",function(e){
    // form will not submit automaticalyy
    e.preventDefault()
    console.log("clicked");
    console.log(username.value, password.value);
    let passwords = localStorage.getItem("passwords")
    
})