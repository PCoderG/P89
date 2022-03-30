function onload() {
    player_1_name = localStorage.getItem("player_1_name");    player_2_name = localStorage.getItem("player_2_name");
    document.getElementById("player1_name").innerHTML = "Player 1 name:"+player_1_name; 
    document.getElementById("player2_name").innerHTML = "Player 2 name:"+player_2_name; 
}