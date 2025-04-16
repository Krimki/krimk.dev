// кубики
document.getElementById('roll-d20').addEventListener('click', function() {
    rollDice(20);
  });
  
  document.getElementById('roll-d6').addEventListener('click', function() {
    rollDice(6);
  });
  
  document.getElementById('roll-d8').addEventListener('click', function() {
    rollDice(8);
  });
  
  document.getElementById('roll-d12').addEventListener('click', function() {
    rollDice(12);
  });
  
  document.getElementById('roll-d10').addEventListener('click', function() {
    rollDice(10);
  });
  
  document.getElementById('roll-d4').addEventListener('click', function() {
    rollDice(4);
  });
  
  function rollDice(sides) {
    const result = Math.floor(Math.random() * sides) + 1;
    document.getElementById('dice-result').textContent = result;
  }
  