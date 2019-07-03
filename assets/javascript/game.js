
// once total score is equal to random number, win
// once total score is over the random number, loss


// Random Value for Beginning of game

// variables
var total = 0;
$('#total').text(total);

var wins = 0;
var losses = 0;




//////////random number generated at beginning of game that ranges 19-120
var randomValue = Math.floor(Math.random() *120 + 19);
$("#randValue").append(" "+ randomValue);


//random numbers for each crystal
var randomBlue = Math.floor(Math.random() *12 + 1);
var randomClear = Math.floor(Math.random() *12 + 1);
var randomPurple = Math.floor(Math.random() *12 + 1);
var randomGreen = Math.floor(Math.random() *12 + 1);



//On Click for Blue jewels ----- //once clicked crystal is now added to total score. 
$("#blue-crystal").on("click", function () {
      total = total + randomBlue;
     $("#totalscore").text(total);

        console.log(randomBlue);

    
    })

    //On Click for Clear Jewel ----//once clicked crystal is now added to total score. 
    $("#clear-crystal").on("click", function () {        
        total = total + randomClear;
        $("#totalscore").text(total);

        console.log(randomClear);    
    
        
    })

    //on click for purple jewel--- //once clicked crystal is now added to total score. 
    $("#purple-crystal").on("click", function () {
        total = total + randomPurple;
        $("#totalscore").text(total);
           
        console.log(randomPurple);
    
        
        })

        //on click for green jewel--- //once clicked crystal is now added to total score. 
        $("#green-crystal").on("click", function () {
          total = total + randomGreen;
          $("#totalscore").text(total);
            
            console.log(randomGreen);
        
            
            })

      //Resets
      //resets the values of jewels and resets Total and resets random number-- without resseting wins and losses

      //does not reset random number.

     
      function reset(){
        total= 0;
        $("#totalscore").html(total);

        randomValue = Math.floor(Math.random() *120 + 19);
        $("#randValue").html(" " + randomValue);

         randomBlue = Math.floor(Math.random() *12 + 1);
         randomClear = Math.floor(Math.random() *12 + 1);
         randomPurple = Math.floor(Math.random() *12 + 1);
         randomGreen = Math.floor(Math.random() *12 + 1);
        
      }
     
   

   ///wins and losses 

      $(".crystal").on("click", function(){
        if (total == randomValue) {
          wins++;
          console.log(total);
          $("#totalscore").text(total);
          $("#wins").html("Wins: " + wins);
          reset();
        }
  
        else if (total > randomValue){
          losses++;
          console.log(total);
          $("#totalscore").text(total);
          $("#losses").html("Losses: " + losses);
          reset();
  
        }
      });
       



