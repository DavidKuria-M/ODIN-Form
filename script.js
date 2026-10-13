
let btn_submit = document.getElementById("btn_submit");

btn_submit.addEventListener('click',() =>{
    let passwd = document.getElementById("password");
    let confirm_passwd = document.getElementById("confirm-password");

    if(passwd.value === confirm_passwd.value){
        alert("Data submitted succesfully");
    }else{
        passwd.style.borderColor = "red";
        confirm_passwd.style.borderColor = "red";
        alert("Password doesnt match.");
    }
});