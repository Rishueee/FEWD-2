var playagain = document.getElementById('ab');
playagain.onclick = () => {
    location.href = "./game.html";
}

var helo = document.getElementById('helo');
helo.onclick = () => {
    location.href = "./index.html";
}

var finalscore = document.getElementById('finalscore');
scoree=localStorage.getItem("score");
finalscore.innerHTML = scoree;

const naam = document.getElementById('naam');
yourname = localStorage.getItem('name')
naam.innerHTML=yourname
