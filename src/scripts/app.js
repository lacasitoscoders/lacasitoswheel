let inputNewParticipant = document.getElementById("input-new-participant");
let btnNewParticipant = document.getElementById("btn-new-participant");
let participantsContainer = document.getElementById("participants-container");
let listofParticipants = [];

btnNewParticipant.addEventListener('click', addParticipant);

function addParticipant() {
    if(inputNewParticipant.value != "") {
        listofParticipants.push(inputNewParticipant.value);
        renderParticipantsList();
    }
    inputNewParticipant.placeholder = '¡Añade participante!';
    inputNewParticipant.value = '';
}

function renderParticipantsList() {
    participantsContainer.innerHTML = '<ul id="ul-participants"></ul>';

    listofParticipants.forEach(participant => {
        let pullParticipant = document.getElementById("ul-participants");
        pullParticipant.innerHTML += `<li id="${participant.replace(/\s|["']/g, '')}"><span>${participant}</span><i class="fa fa-user-minus" id="btn-delete" onclick="deleteParticipant('${participant.replace(/\s|["']/g, '')}')"></i><i class="fa fa-edit" id="btn-edit"></i></li>`;
    })
}

renderParticipantsList()

let btnDelete = document.getElementById("btn-delete");
let btnEdit = document.getElementById("btn-edit");

btnDelete.addEventListener('click', deleteParticipant(id));

// function deleteParticipant() {
//     //$(this).closest("li").remove(); 
//     alert("Bo, qué pacha");
// }

// function deleteParticipant(id) {
//     document.getElementById(id).remove();
//     // renderParticipantsList();
// }

// $("ul").on("click", "button", function(e) {
//     e.preventDefault();
//     $(this).parent().remove();
// });

