const form = document.querySelector("form");

form.addEventListener("submit", async (e)=>{
    e.preventDefault();

    const username = form.username.value;
    const passwd = form.passwd.value;
    const conPass = form.conPass.value;

    const res = await fetch("/signUp",{
        method: "POST",
        body: JSON.stringify({username, passwd, conPass}),
        headers: {"Content-Type":"application/json"}
    });

    const {success, errors, token} = await res.json();

    if(success){
        window.location.href = `/createCookie/${token}`;
    }else{

    }
})