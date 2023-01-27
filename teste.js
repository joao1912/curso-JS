(function(){
    let conteiner = document.querySelector("#conteiner")
    conteiner.addEventListener("click",function(e){
        if(e.target.nodeName === "BUTTON") {
            alert("mas bah guri")
        }
    })
})()
