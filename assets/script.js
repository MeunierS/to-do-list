//ajout de <li>
function ajoutTask() {
    let toDo = document.createElement("li"); //création de l'élément <li>
    let targetToDo = document.getElementById("target"); //défini la cible <ul>
    if (document.getElementById("myInput").value === '') {
        alert("You must write something!");
    } else {
        let temp = document.createTextNode(document.getElementById("myInput").value); //va chercher la task dans l'input
        toDo.appendChild(temp);
        targetToDo.appendChild(toDo); //met le <li> en child du <ul>
        let btn = document.createElement("button"); //crée le bouton X
        let temp2 = document.createTextNode("X");
        btn.appendChild(temp2);
        btn.className = "close";
        toDo.appendChild(btn);
    }

}

//click to hide

let del = document.getElementsByClassName("close");
console.log(del);
for (i = 0; i < del.length; i++) {
    del[i].onclick = function () {
        let target = this.parentElement;
        target.style.display = "none";
    }
}


//event si click sur send
document.getElementById("send").addEventListener("click", () => {
    ajoutTask();
});

//event si enter pressé
document.getElementById("myInput").addEventListener("keydown", ({
    key
}) => {
    if (key === "Enter") {
        event.preventDefault();
        ajoutTask();
    }
});

function Toggle() {
    let element = document.body;
    element.classList.toggle("dark-mode");
 }