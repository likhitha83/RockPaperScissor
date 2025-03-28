    /*const score={
      wins:0,
      losses:0,
      ties:0
    };//object to keep track of score*/

    let score =JSON.parse(localStorage.getItem('score'));//or else we can use default operator here instead of if condition ==>||{wins:0,losses:0,ties:0}

    if(score === null){
      score={
        wins:0,
        losses:0,
        ties:0
      }
    };

    updateScoreElement();

    function playGame(playerMove){
      const computerMove = pickComputerMove();

      let result='';

      if(playerMove === 'scissors'){

        if(computerMove === 'rock'){
          result= 'You Loose';
        }else if (computerMove === 'paper'){
          result= 'You Win';
        }else if(computerMove === 'scissors'){
          result='Tie';
        }
      }else if(playerMove === 'paper'){

        if(computerMove === 'rock'){
          result= 'You win';
        }else if (computerMove === 'paper'){
          result= 'Tie';
        }else if(computerMove === 'scissors'){
          result='You Loose';
        }
      }else if(playerMove === 'rock'){

        if(computerMove === 'rock'){
          result= 'Tie';
        }else if (computerMove === 'paper'){
          result= 'You Loose';
        }else if(computerMove === 'scissors'){
          result='You Win';
        }
      }

      if(result==='You Win'){
        score.wins=score.wins+1;
      }else if(result='You Loose'){
        score.losses+=1;
      }else if(result='Tie'){
        score.ties+=1;
      }

      localStorage.setItem('score',JSON.stringify(score));

      updateScoreElement();

      document.querySelector('.js-result').innerHTML=result;

      document.querySelector('.js-moves').innerHTML=`You
    <img class="move-icon" src="imgs/${playerMove}-emoji.png" >
    <img class="move-icon" src="imgs/${computerMove}-emoji.png" >
    Computer`;


      alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`);
    }


    function updateScoreElement(){
      document.querySelector('.js-score').innerHTML=`Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`;
    }


    function pickComputerMove(){   
       
      const randomNumber= Math.random(); 

      let computerMove='';

      if(randomNumber>=0 && randomNumber < 1/3){
      computerMove='rock';
      }else if(randomNumber>=1/3 && randomNumber < 2/3){
        computerMove='paper';
      }else{
        computerMove='scissors';
      }

      return computerMove;
    }