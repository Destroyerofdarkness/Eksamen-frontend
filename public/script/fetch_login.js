const form = document.querySelector("form");

form.addEventListener("submit", async (e)=>{
    e.preventDefault();

    const username = form.username.value;
    const passwd = form.passwd.value;

    const res = await fetch("/signIn",{
        method: "POST",
        body: JSON.stringify({username, passwd}),
        headers: {"Content-Type":"application/json"}
    });

    const {success, errors, token} = await res.json();

    if(success){
        window.location.href = `/createCookie/${token}`;
    }else{

    }
})