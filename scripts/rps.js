// semicolons are cringe

scores = [0, 0]

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function getComputerMove() {
  const moves = ['rock', 'paper', 'scissors']
  return moves[randomNumber(0, 2)]
}

function getResult(playerMove, computerMove) {
  const result = {
    rock: { rock: 'tie', paper: 'lose', scissors: 'win' },
    paper: { rock: 'win', paper: 'tie', scissors: 'lose' },
    scissors: { rock: 'lose', paper: 'win', scissors: 'tie' }
  };
  return result[playerMove][computerMove]
}

function main(playerMove) {
  const computerMove = getComputerMove()
  document.getElementById('computer-move').innerHTML = '<img src="images/' + computerMove + '.png">'
  document.getElementById('player-move').innerHTML = '<img src="images/' + playerMove + '.png">'

  const result = getResult(playerMove, computerMove)
  if (result == 'win') {
    scores[0]++
    document.getElementById('player-score').innerHTML = 'Player: ' + scores[0]
  }
  else if (result == 'lose') {
    scores[1]++
    document.getElementById('computer-score').innerHTML = 'Computer: ' + scores[1]
  }
  if (result != 'tie') {
    const winner = (result == "win") ? 'Player' : 'Computer'
    if (winner == 'Player') {
      playSound(playerMove)
    }
    else {
      playSound(computerMove)
    }
  }
}

function playSound(sound) {
  var audio = new Audio('./sfx/' + sound + '.ogg');
  audio.loop = false;
  audio.play(); 
}