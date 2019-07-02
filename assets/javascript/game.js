//once clicked crystal is now added to total score. 
// once total score is equal to random number, win
// once total score is over the random number, loss


// Random Value for Beginning of game

// variables
var total = 0;
var wins = 0;
var losses = 0;
var crystalValues = "";
$('#numberWins').text(wins);
$('#numberLosses').text(losses);


//random number generated at beginning of game that ranges 19-120
var randomValue = Math.floor(Math.random() *120 + 19);
$("#randValue").append(" "+ randomValue);



//On Click for Blue jewels ----- needs to keep the value its given and attach itsself to the score----------------------------
$("#blue-crystal").on("click", function () {
        var random = Math.floor(Math.random() *12 + 1);
        crystalValues = random
    
    console.log(crystalValues);

    
    })

    //On Click for Clear Jewel
    $("#clear-crystal").on("click", function () {

        var crystalValues = "";
        for (var i=0; i<2; i++){
            var random = Math.floor(Math.random() *11 + 1);
            crystalValues = random
        }
        console.log(crystalValues);
    
        
        })

    //on click for purple jewel
    $("#purple-crystal").on("click", function () {

        var crystalValues = "";
        for (var i=0; i<2; i++){
            var random = Math.floor(Math.random() *11 + 1);
            crystalValues = random
        }
        console.log(crystalValues);
    
        
        })

        //on clicl for green jewel
        $("#green-crystal").on("click", function () {

            var crystalValues = "";
            for (var i=0; i<2; i++){
                var random = Math.floor(Math.random() *11 + 1);
                crystalValues = random
            }
            console.log(crystalValues);
        
            
            })