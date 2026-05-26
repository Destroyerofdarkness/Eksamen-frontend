const form = document.querySelector("form");

form.addEventListener("submit",async(e)=>{
    e.preventDefault()
    const title = form.title.value;
    const description = form.description.value;
    const connection = form.connection.value;

    const res = await fetch("/hendelse/anmeld",{
        method: "POST",
        body: JSON.stringify({}),
        headers: {"Content-Type": "application/json"}
    });

    const {success, errors} = await res.json();

    if(success){
        window.alert("Hendelsen ble registrert");
        window.location.href = "/"
    }else{

    }
} )