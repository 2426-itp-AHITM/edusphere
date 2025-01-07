function switchImg(element, slide) {
    let imageDisplay = document.getElementById("imageDisplay");
            element.style.backgroundColor = "white";
            element.style.color = "black";
            

            // Optional: Stile von anderen Schaltflächen zurücksetzen
            const buttons = document.querySelectorAll(".switchbutton");
            buttons.forEach(button => {
                if (button !== element) {
                    button.style.backgroundColor = "#282B30";
                    button.style.color = "#5F6265";
                    
                }
            });
    
    if(slide==1){ 
        imageDisplay.src = "../img/stundentafel.png"
    }
    else{
        imageDisplay.src = "../img/stundenplan.png";
    }
}