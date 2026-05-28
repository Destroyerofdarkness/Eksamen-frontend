//Toggle the show logg 
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

const main = document.querySelector("main");

//Update Request
main.addEventListener("submit", async(e)=>{
    e.preventDefault();

    //Logg Update
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

       //Critical Level Update 
    } else if (e.target.classList.contains("criticalLevel")){
        const issueId = e.target.issueId.value;
        const criticality = e.target.criticalLevel.value;
        if(!criticality == ""){
        
        const res = await fetch("/hendelse/oppdater/kritiskNiva",{
            method: "PUT",
            body: JSON.stringify({issueId, criticality}),
            headers: {"Content-Type": "application/json"}
        })
        

        const {success } = await res.json();

        if(success){
            window.alert("Hendelsen ble oppdatert");
            window.location.reload();
        }else{
           window.alert("Det er ikke mulig å oppdatere hendelsen akkurat nå!!");
           window.location.reload();
        }
    }

        //Authorized person Update
    } else if(e.target.classList.contains("authorized")){
        const worker = e.target.worker.value;
        if(!worker ==""){
            const worker = e.target.worker.value;
            const id = e.target.id.value;

            const res = await fetch("/hendelse/oppdater/ansvarlig",{
                method: "PUT",
                body: JSON.stringify({id, worker}),
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
    } else if (e.target.classList.contains("close")){


        const issueId = e.target.issueId.value;

        const res = await fetch("/hendelse/oppdater/status",{
            method: "PUT",
            body: JSON.stringify({issueId}),
            headers: {"Content-Type": "application/json"}
        })

        const {success} = await res.json();

            if(success){
            window.alert("Hendelsen ble lukket!!");
            window.location.reload();
            }else{
           window.alert("Det er ikke mulig å lukket hendelsen akkurat nå!!");
           window.location.reload();
            }
    }
})