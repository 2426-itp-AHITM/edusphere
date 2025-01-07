const galerie = document.getElementById('galerie');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

count=0
function slide() {
    const items = document.querySelectorAll('.galerie-item');
    if(count == 4){
        count=0
    }
    count++

    for (i=0; i<items.length; i++){
        if(i == count-1) {
            items[i].style.flex = 4
            console.log(i)
            console.log(count)
            if(count==1){
                items[3].style.flex = 1
                items[2].style.flex = 2
                items[1].style.flex = 2.7
            }else if(count==2) {
                items[2].style.flex = 2.7
                items[3].style.flex = 2
                items[0].style.flex = 1
            }
            else if(count==3) {
                items[1].style.flex = 2
                items[3].style.flex = 2.7
                items[0].style.flex = 1
            }
            else if(count==4){
                items[1].style.flex = 2
                items[2].style.flex = 2.7
                items[0].style.flex = 1
            }
            
        }
    }


}

function slideback() {
    const items = document.querySelectorAll('.galerie-item');
    if(count == 0){
        count=4
    }
    count--

    for (i=0; i<items.length; i++){
        if(i == count-1) {
            items[i].style.flex = 4
            if(count==1){
                items[3].style.flex = 1
                items[2].style.flex = 2
                items[1].style.flex = 2.7
            }else if(count==2) {
                items[2].style.flex = 2.7
                items[3].style.flex = 2
                items[0].style.flex = 1
            }
            else if(count==3) {
                items[1].style.flex = 2
                items[3].style.flex = 2.7
                items[0].style.flex = 1
            }
            else if(count==4){
                items[1].style.flex = 2
                items[2].style.flex = 2.7
                items[0].style.flex = 1
            }
        }
    }


}

slide()