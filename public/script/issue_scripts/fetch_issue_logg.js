
document.addEventListener("click", (e)=>{
    if(e.target.classList.contains("skrivLogg")){
        const targetForm = e.target.nextElementSibling;
        targetForm.style.display = "flex"
        e.target.style.display = "none"
        const targetButton = e.target.previousElementSibling;
        targetButton.style.display = "flex"
    }else if(e.target.classList.contains("lukkLogg")){
        e.target.style.display = "none";
        const targetButton = e.target.nextElementSibling;
        targetButton.style.display = "flex";
        const targetForm = targetButton.nextElementSibling;
        targetForm.style.display = "none";
    }
})

document.addEventListener("submit", async(e)=>{
    e.preventDefault();
    if(e.target.classList.contains("logg")){  
        
        const id = e.target.id.value;
        const loggText = e.target.logg.value;

        const res = await fetch("/hendelse/oppdater/logg",{
            method: "PUT",
            body: JSON.stringify({id, loggText}),
            headers: {"Content-Type": "application/json"}
        });


        const {success} = await res.json();

        if(success){
            window.alert("Hendelsen ble oppdatert");
            window.location.reload();
        }else{
           window.alert("Det er ikke mulig å oppdatere hendelsen akkurat nå!!");
           window.location.reload();
        }
    }
})