// Logic To fill the table
let tb = document.querySelector("table")
let data = localStorage.getItem("passwords")
if(data ==null){
    tb.innerHTML ="No Data to Show"
}

    else{
        let arr = JSON.parse(data);
        let str ="";
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            
 str +=`<tr>
<td>${element.website}</td>
<td>${element.username}</td>
<td>${element.password}</td>
<td>${Deleet}</td>
</tr>`
        }
tb.innerHTML =tb.innerHTML + str


}

document.querySelector(".btn").addEventListener("click",function(e){
    // form will not submit automaticalyy
    e.preventDefault()
    console.log("clicked");
    console.log(username.value, password.value);
    let passwords = localStorage.getItem("passwords")
    if(passwords==null){
        let json =[]
        json.push({username:username.value,password:password.value})
        alert("Password Saved")
        localStorage.setItem("passwords", JSON.stringify(json))
    }
    else{
        let json =JSON.parse(localStorage.getItem("passwords"))
        json.push({username:username.value,password:password.value})
        alert("Password Saved")
        localStorage.setItem("passwords", JSON.stringify(json))
    }
})