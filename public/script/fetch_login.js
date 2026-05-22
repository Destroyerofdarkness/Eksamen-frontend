const form = document.querySelector("form");
const userError = document.querySelector(".error.user");
const passError = document.querySelector(".error.passwd");

form.addEventListener("submit", async (e)=>{
    e.preventDefault();

    const username = form.username.value;
    const passwd = form.passwd.value;

    userError.textContent = "";
    passError.textContent = "";


    const res = await fetch("/signIn",{
        method: "POST",
        body: JSON.stringify({username, passwd}),
        headers: {"Content-Type":"application/json"}
    });

    const {success, errors, token} = await res.json();

    if(success){
        window.location.href = `/createCookie/${token}`;
    }else{
        userError.textContent = errors.username;
        passError.textContent = errors.passwd;
    }
})