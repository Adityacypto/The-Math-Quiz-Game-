playerl1_name= localStorage.getItem("player1_name");
playerl2_name= localStorage.getItem("player2_name");

playerl1_score = 0;
playerl2_score = 0;

document.getElementById("player1_name").innerHTML= playerl1_name + " : ";
document.getElementById("player2_name").innerHTML= playerl2_name + " : ";

document.getElementById("player1_score").innerHTML= playerl1_score = 0;
document.getElementById("player2_score").innerHTML= playerl2_score = 0;

document.getElementById("player_question").innerHTML= "Question turn - "+ playerl1_name;
document.getElementById("player_answer").innerHTML= "Answer turn - "+ playerl2_name;


 