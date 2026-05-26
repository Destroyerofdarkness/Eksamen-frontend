const form = document.querySelector("form");
const titleError = document.querySelector(".error.title");
const descError = document.querySelector(".error.description");


form.addEventListener("submit",async(e)=>{
    e.preventDefault()
    const title = form.title.value;
    const description = form.description.value;
    const connection = form.connection.value;

    titleError.textContent = ""
    descError.textContent = "";

    const res = await fetch("/hendelse/anmeld",{
        method: "POST",
        body: JSON.stringify({title, description, connection}),
        headers: {"Content-Type": "application/json"}
    });

    const {success, errors} = await res.json();

    if(success){
        window.alert("Hendelsen ble registrert");
        window.location.href = "/"
    }else{
        titleError.textContent = errors.title;
        descError.textContent = errors.description;
    }
} )