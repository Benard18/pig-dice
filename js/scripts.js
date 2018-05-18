//business logic interface//
  var P1 ,P2 ;
  var roll ;
  var totalScore = 0;



    function Player(turn){
              this.name = name;
              this.score = 0;
              this.cumulate =  function(score){
                 this.score += score;
              }
              this.Pscore = 0;
              this.hold = function(){
                this.Pscore += this.score;
              }
            }


             //if placed on 1//
function rollFunction(){
   roll =  Math.floor(6*Math.random()+1);
              if(roll == 1){
                totalScore = 0;

                alert("Sorry" + this.name + "," + "just placed 1 bruv.")
                return false
              }
              else if (true) {


                totalScore += roll
              }
              return totalScore;
            }

            //holding//
 function add(name,score){
   name.cumulate(score);

   totalScore=0;
   return true;
            }

  function namePlayers (p1,p2){
    P1 = new Player(p1);
    P2 = new Player(p2);
  }
  //Winner//
            Player.prototype.winnerfunction = function(){
              if (totalScore>=100){
                alert("winner" + this.name)
              }
              ///new game//
            }
            Player.prototype.newGame = function () {
  //debugger;
  this.score = 0;
  this.totalscore = 0;
  this.name ="";
}

            /////to clear names placed/////

            var clearfunction = function(){
              $("player1").val("");
              $("player2").val("");
            }



///////User interface logic/////////////
// User Interface
$(document).ready(function() {

  $("button#click").click(function(event) {
   P1 = new Player(true);
   P2 = new Player(false);
    $(".player-console").show();
    $("#red").hide();
    var player1 = $("#player1").val();
    $("#player1Name").text(player1);

    var player2 = $("#player2").val();
    $("#player2Name").text(player2);
    player1=P1.name;
    player2=P1.name;


  });
  $("button#new-game").click(function(event){
    location.reload();
    clearfunction();
    $(".player-console").hide();
  P1.newGame();
  P2.newGame();
    $("#round-total-1").empty();
    $("#total-score-1").empty();
    $("#die-roll-1").empty();
    $("#round-total-2").empty();
    $("#total-score-2").empty();
    $("#die-roll-2").empty();

    $("#red").show();
  });
  $("button#player1-roll").click(function(event){
  Player(roll);
  $("#die-roll-1").text(roll);
  rollFunction();
  add(P1,score);
  $("#round-total-1").text(totalScore);
});

$("button#player2-roll").click(function(event){
  Player(roll);
  $("#die-roll-2").text(roll);
  rollFunction();
  add(P2,score);
  $("#round-total-2").text(totalScore);
});

$("button#player1-hold").click(function(event){
P1.hold();
    $("#total-score-1").text(P1.Pscore);
    $("#round-total-1").empty();
    $("#die-roll-1").empty();
    P1.winnerfunction();
  });

  $("button#player2-hold").click(function(event){
    P2.hold();
    $("#total-score-2").text(P2.Pscore);
    $("#round-total-2").empty();
    $("#die-roll-2").empty();
    P2.winnerfunction();
  });

});
