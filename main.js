function addUser() {
    player_1_name=document.getElementById("player1-name-input").value;
    player_2_name=document.getElementById("player2-name-input").value;
    localStorage.setItem("player1_name",player_1_name);
    localStorage.setItem("player2_name",player_2_name);

    window.location = "game.html";
}