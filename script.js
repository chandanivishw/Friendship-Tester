let yourname = document.getElementById("yourname");
let friend_name = document.getElementById("friend-name");
let submit_btn = document.getElementById("submit-btn");
let showScore = document.getElementById("showScore");

function friendshipScoreFn(){
 // console.log("Button clicked!");
    if (yourname.value !== "" && friend_name.value !== "") {

        showScore.innerHTML = "";
        let friendscore = Math.round(Math.random() * 100);
        // console.log(randomVal);
        let heading = document.createElement("h3");
        heading.textContent = yourname.value + "  and " + friend_name.value + " 's friendship score is " + friendscore + " 💖";
        showScore.appendChild(heading);

        let para = document.createElement("p");

        if (friendscore > 80) {

            para.textContent = "🌟 Best Friend Forever! 💖🌟💫";

        } else if (friendscore > 60) {

            para.textContent = " 😊 Good Friend! 😊💛";

        } else if (friendscore > 30) {

            para.textContent = " 👋 Just a Friend.😐 ";

        } else {
            para.textContent = "🤷 Stranger.";
        }
        showScore.appendChild(para);
    }
     // yourname.value = "";
    // friend_name.value = "";
}

submit_btn.addEventListener("click",friendshipScoreFn);
friend_name.addEventListener("keydown",(e)=>{
    if(e.key === "Enter"){
        friendshipScoreFn();
    }
})
