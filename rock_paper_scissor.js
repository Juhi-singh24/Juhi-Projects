 
 
 const score = 
      JSON.parse(localStorage.getItem('score_str'))
      || {
      win : 0,
      lose : 0,
      tie : 0
    };

  const winsound = new Audio("win.mpeg");
  const losesound = new Audio("lose.mpeg");
  const tiesound = new Audio("tie.mpeg");

    

    Scoretell();

    function playermove(player){
      let computer_move = computer();

      let result = "";


      if(player === 'Rock'){

        if(computer_move === 'Rock'){
        result = "It's a Tie😊";
      }

        else if(computer_move === 'Paper'){
        result = 'You lose😟';
      }

      else{
        result = 'You win🎉🎉';
      }
    }

    else if(player === 'Paper'){

        if(computer_move === 'Rock'){
        result = "You win🎉🎉";
      }

        else if(computer_move === 'Paper'){
        result = "It's a Tie😊";
      }

      else{
        result = 'You lose😟';
      }
    }


    else if(player === 'Scissor'){

        if(computer_move === 'Rock'){
        result = "You lose😟";
      }

        else if(computer_move === 'Paper'){
        result = "You win🎉🎉";
      }

      else{
        result = "It's a Tie😊";
      }
    }



    if(result == 'You win🎉🎉'){
      score.win += 1;
      winsound.play();
    }

    else if(result == 'You lose😟'){
      score.lose += 1;
      losesound.play();
    }

    else if(result == "It's a Tie😊"){
      score.tie += 1;
      tiesound.play();
    }

  const images = {
  Rock: "https://imgproxy.attic.sh/NJCujox_Fwass7rYN_Fx-F6dUbSw2uFgbl7QGd8Ezkg/rs:fit:768:768:1:1/t:1:FF00FF:false:false/pngo:false:true:256/aHR0cHM6Ly9hdHRpYy5zaC96NzdwZnB5cTFuOXVzdGxreWg4cGFuOGQ2N2ls.png",

  Paper: "https://static.vecteezy.com/system/resources/thumbnails/055/494/269/small_2x/happy-paper-sheet-cartoon-character-illustration-png.png",

  Scissor: "https://cdn0.iconfinder.com/data/icons/rock-paper-scissors-emoji/792/rock-paper-scissors-emoji-cartoon-009-1024.png"
};


    const score_obj = JSON.stringify(score);
    const score_str = localStorage.setItem('score_str',score_obj);
    

    Scoretell();
    Movetell();
    resultTell();

   function Movetell(){
  document.querySelector('.js_move').innerHTML =
  `
  You choose
  <img src="${images[player]}" class="move-img">
  Computer choose
  <img src="${images[computer_move]}" class="move-img">
  `;
}


    

    function resultTell(){
      document.querySelector('.js_result').innerHTML= `${result}`;
    }

    
  }

   

  function Scoretell(){
      document.querySelector('.js_score').innerHTML = `Win🏆 : ${score.win} Lose😣 : ${score.lose} Tie🤝 : ${score.tie}`;
    }



  

    function computer(){
      const randomnumber = Math.random();

      let computermove = "";

      if(randomnumber >= 0 && randomnumber <1/3){
        computermove = 'Rock';
    }

    else if(randomnumber >=1/3 && randomnumber <2/3){

      computermove = 'Paper';
    }

    else if(randomnumber >= 2/3 && randomnumber <1){

      computermove = 'Scissor';

    }

    return computermove;

    }