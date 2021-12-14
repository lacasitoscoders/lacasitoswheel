let $7477d4a697b7254e$var$inputNewParticipant = document.getElementById("input-new-participant");
let $7477d4a697b7254e$var$btnNewParticipant = document.getElementById("btn-new-participant");
let $7477d4a697b7254e$var$participantsContainer = document.getElementById("participants-container");
let $7477d4a697b7254e$var$selectedList = document.getElementById("section__to-play--selected-list");
let $7477d4a697b7254e$var$btnPlay = document.getElementById("btn-play");
let $7477d4a697b7254e$var$listofParticipants = [];
function $7477d4a697b7254e$var$renderParticipantsList() {
    $7477d4a697b7254e$var$participantsContainer.innerHTML = '<ul id="ul-participants"></ul>';
    $7477d4a697b7254e$var$selectedList.innerHTML = '<ul id="ul-selected"></ul>';
    $7477d4a697b7254e$var$listofParticipants.forEach((participant)=>{
        let pullParticipant = document.getElementById("ul-participants");
        pullParticipant.innerHTML += `<li id="${participant.replace(/\s|["']/g, '')}"><span>${participant}</span><i class="fa fa-user-minus" id="btn-delete-${participant}"></i><i class="fa fa-edit" id="btn-edit"></i></li>`;
        $7477d4a697b7254e$var$eventToDelete(participant);
    });
}
$7477d4a697b7254e$var$renderParticipantsList();
$7477d4a697b7254e$var$btnNewParticipant.addEventListener('click', $7477d4a697b7254e$var$addParticipant);
function $7477d4a697b7254e$var$addParticipant() {
    if ($7477d4a697b7254e$var$inputNewParticipant.value != "") {
        $7477d4a697b7254e$var$listofParticipants.push($7477d4a697b7254e$var$inputNewParticipant.value);
        $7477d4a697b7254e$var$renderParticipantsList();
    }
    $7477d4a697b7254e$var$inputNewParticipant.value = '';
}
$7477d4a697b7254e$var$inputNewParticipant.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') $7477d4a697b7254e$var$addParticipant();
});
$7477d4a697b7254e$var$btnPlay.addEventListener('click', $7477d4a697b7254e$var$selectedWinner);
function $7477d4a697b7254e$var$tubeFocused() {
    document.getElementById("tube-image").focus();
}
function $7477d4a697b7254e$var$selectedWinner() {
    $7477d4a697b7254e$var$tubeFocused();
    if ($7477d4a697b7254e$var$listofParticipants.length > 0) {
        let winner = Math.floor(Math.random() * $7477d4a697b7254e$var$listofParticipants.length);
        let winnerName = $7477d4a697b7254e$var$listofParticipants[winner];
        let ulSelected = document.getElementById("ul-selected");
        ulSelected.innerHTML += `<li>${winnerName}</li>`;
        $7477d4a697b7254e$var$listofParticipants.splice(winner, 1);
    }
    if ($7477d4a697b7254e$var$listofParticipants.length === 0) console.log("no hay mas participantes");
}
function $7477d4a697b7254e$var$deleteParticipant() {
    console.log('deleted');
}
function $7477d4a697b7254e$var$eventToDelete(player) {
    let btnDelete = document.getElementById(`btn-delete-${player}`);
    btnDelete.addEventListener('click', ()=>{
        console.log(player);
    });
}


