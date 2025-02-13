// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let friends = []


// Add a friend to the list 
function agregarAmigo(){
    const name = document.getElementById('amigo').value.trim();
    // Check if the input is empty
    if (name === "") {
        alert("Please, enter a name. / Por favor, inserte un nombre.");
        return;
    } else { 
        friends.push(name);
        document.getElementById('amigo').value = "";
        showFriends();
    }
}

// Show the friends list
function showFriends(){
    let list = document.getElementById('listaAmigos').innerHTML = "";
    for (let i = 0; i < friends.length; i++){
        list += `<li>${friends[i]}</li>`;
    }
    document.getElementById('listaAmigos').innerHTML = list;
}


// Sort a friend in the list
function sortearAmigo(){
    // Check if the array is empty
    if (friends.length === 0) {
        alert("Please enter a name before sorting. / Por favor ingrese un nombre antes de sortear.");
        return;
    } else {
        // Sort the array in aleatory order
        let index = Math.floor(Math.random() * friends.length);
        const friend = friends[index];
        document.getElementById('resultado').innerHTML = `El amigo seleccionado es ${friend}`;
    }
    
}