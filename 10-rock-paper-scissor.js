let score=JSON.parse(localStorage.getItem('score')) || {Wins:0, Loses:0, Ties:0};
    /*
    if(score===null){
      score= {
        Wins:0,
        Loses:0,
        Ties:0
      };
    }
    */
    updateScoreElement();

    function playGame(playerMove) {
      const computerMove1 = pickComputerMove();
      let result = '';
      if (playerMove === 'paper') {
        if (computerMove === 'rock') {
          result = 'You win';
        }
        else if (computerMove === 'paper') {
          result = 'Tie';
        }
        else if (computerMove === 'scissor') {
          result = 'You lose';
        }
      }
      else if (playerMove === 'scissor') {
        if (computerMove === 'rock') {
          result = 'You lose';
        }
        else if (computerMove === 'paper') {
          result = 'You win';
        }
        else if (computerMove === 'scissor') {
          result = 'Tie';
        }
      }
      else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
          result = 'Tie';
        }
        else if (computerMove === 'paper') {
          result = 'You lose';
        }
        else if (computerMove === 'scissor') {
          result = 'You win';
        }
      }
      if(result==='You win'){
        score.Wins+=1;
      }
      if(result==='You lose'){
        score.Loses+=1;
      }
      if(result==='Tie'){
        score.Ties+=1;
      }

      localStorage.setItem('score',JSON.stringify(score));

      updateScoreElement();

      document.querySelector('.js-result').innerHTML=result;
      
      document.querySelector('.js-moves').innerHTML=`You <img src="${playerMove}-emoji.jpg" alt="${playerMove}" class="move-icon">  <img src="${computerMove}-emoji.jpg" alt="${computerMove}" class="move-icon"> Computer`;
      
    }


    function updateScoreElement() {
      document.querySelector('.js-score')
    .innerHTML=`Wins: ${score.Wins} Loses: ${score.Loses} Ties: ${score.Ties}`;
    }

    let computerMove = '';
    function pickComputerMove() {
      const randomNumber = Math.random();


      if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
      }
      else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
      }
      else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissor';
      }
    }