let inputNewParticipant = document.getElementById("input-new-participant");
let btnNewParticipant = document.getElementById("btn-new-participant");
let participantsContainer = document.getElementById("participants-container");
let selectedList = document.getElementById("section__to-play--selected-list");
let btnPlay = document.getElementById("btn-play");
let listofParticipants = [];

function renderParticipantsList() {
    participantsContainer.innerHTML = '<ul id="ul-participants"></ul>';
    selectedList.innerHTML = '<ul id="ul-selected"></ul>';

    listofParticipants.forEach(participant => {
        let pullParticipant = document.getElementById("ul-participants");
        pullParticipant.innerHTML += `<li id="${participant.replace(/\s|["']/g, '')}"><span>${participant}</span><i class="fa fa-user-minus" id="btn-delete-${participant}"></i><i class="fa fa-edit" id="btn-edit"></i></li>`;

        eventToDelete(participant);
    })
}

renderParticipantsList();

btnNewParticipant.addEventListener('click', addParticipant);

function addParticipant() {
    if(inputNewParticipant.value != "") {
        listofParticipants.push(inputNewParticipant.value);
        renderParticipantsList();
    }

    if (inputNewParticipant.value = '') {
        inputNewParticipant.placeholder = '¡Añade participante!';
    }
}      

inputNewParticipant.addEventListener('keyup', function (event) {
    if(event.key === 'Enter') {
        addParticipant();
    }
}) ;

btnPlay.addEventListener('click', selectedWinner);

function tubeFocused() {
    document.getElementById("tube-image").focus();
}

function selectedWinner () {
    tubeFocused();    
    
    if (listofParticipants.length > 0) {
        let winner = Math.floor(Math.random() * listofParticipants.length);
        let winnerName = listofParticipants[winner];
        let ulSelected = document.getElementById("ul-selected");

        ulSelected.innerHTML += `<li>${winnerName}</li>`
        listofParticipants.splice(winner, 1);
    }
    
    if (listofParticipants.length === 0) {
        console.log("no hay mas participantes");
    }
}

function deleteParticipant() {
    console.log('deleted');
}

function eventToDelete(player) {
    let btnDelete = document.getElementById(`btn-delete-${player}`);
        btnDelete.addEventListener('click', () => {
            console.log(player);
        })
}