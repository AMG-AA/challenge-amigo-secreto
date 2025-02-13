// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let friends = []


function addFriend(name){
    name = document.getElementById('amigo').value;
    if (name === "") {
        alert("Please enter a name. / Por favor ingrese un nombre.");
        return;
    } else {
        friends.push(name);
        console.log(friends);
        document.getElementById('amigo').value = "";
        document.getElementById('amigo').focus();
    }
}