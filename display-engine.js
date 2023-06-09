let displayEngine = (()=>{console.log("display engine running")
    document.body.addEventListener("click",
    (e)=>{console.log(e.target);
        // let selectedSpace = document.e.target.classList
        let position = e.target.className.substring(e.target.className.length-1);
        console.log({position});
        let moveRow= Math.floor((position-1)/3)+1;
        console.log({moveRow});
        moveColumn = position - ((moveRow - 1) *3);
        console.log({moveColumn})
   let playerMove =((name)=>{
        let display = document.querySelector(".console");
        display.innerHTML=""
        let displayText = document.createElement("div");
        displayText.textContent = `${name}'s Move`
        display.appendChild(displayText);
        display.classList.toggle("hidden");
        setTimeout(display.classList.toggle("hidden"),
        500)
        return{
            moveRow,
            moveColumn,
            playerMove
        }
   })
})
})()
