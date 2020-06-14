document.addEventListener('DOMContentLoaded', () => {
    console.log('Javascript loaded');

    const creator = document.createElement("div");
    creator.setAttribute("id", "creator");
    creator.innerHTML = "Made by Sam Cassie";
    document.body.appendChild(creator);

    const form = document.querySelector('#new-item-form')
    form.addEventListener('submit', handleFormSubmit)

    const deleteButton = document.querySelector('#deleteAll')
    deleteButton.addEventListener('click', handleDeleteClick)

})


const handleFormSubmit = function(event){
    event.preventDefault();

    // console.log(event);
    const name = (event.target.name.value);
    const team = (event.target.team.value);
    const position = (event.target.position.value);

    const player = document.createElement('ul');
    player.setAttribute("id", "player");

    const playerNameItem = document.createElement('li');
    playerNameItem.textContent = "Name: "
    const playerName = document.createTextNode(name);
    playerNameItem.appendChild(playerName);

    const playerTeamItem = document.createElement('li');
    playerTeamItem.textContent = "Team: "
    const playerTeam = document.createTextNode(team);
    playerTeamItem.appendChild(playerTeam);

    const playerPositionItem = document.createElement('li');
    playerPositionItem.textContent = "Position: "
    const playerPosition = document.createTextNode(position);
    playerPositionItem.appendChild(playerPosition);

    player.appendChild(playerNameItem);
    player.appendChild(playerTeamItem);
    player.appendChild(playerPositionItem);

    document.getElementById('players-list').appendChild(player);

    document.getElementById('new-item-form').reset();
};



const handleDeleteClick = function(){
    const players = document.getElementById('players-list');
    players.innerHTML = '';
}
