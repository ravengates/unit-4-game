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


//////////random number generated at beginning of game that ranges 19-120
var randomValue = Math.floor(Math.random() *120 + 19);
$("#randValue").append(" "+ randomValue);


//random numbers for each crystal
var randomBlue = Math.floor(Math.random() *12 + 1);
var randomClear = Math.floor(Math.random() *12 + 1);
var randomPurple = Math.floor(Math.random() *12 + 1);
var randomGreen = Math.floor(Math.random() *12 + 1);



//On Click for Blue jewels ----- needs to keep the value its given and attach itsself to the score----------------------------
$("#blue-crystal").on("click", function () {
      total = total + randomBlue;
     $("#totalscore").text(total);

        console.log(randomBlue);

    
    })

    //On Click for Clear Jewel
    $("#clear-crystal").on("click", function () {        
        total = total + randomClear;
        $("#totalscore").text(total);

        console.log(randomClear);    
    
        
    })

    //on click for purple jewel
    $("#purple-crystal").on("click", function () {
        total = total + randomPurple;
        $("#totalscore").text(total);
           
        console.log(randomPurple);
    
        
        })

        //on click for green jewel
        $("#green-crystal").on("click", function () {
          total = total + randomGreen;
          $("#totalscore").text(total);
            
            console.log(randomGreen);
        
            
            })