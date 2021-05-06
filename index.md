<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Dicee</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css?family=Indie+Flower|Lobster" rel="stylesheet">
  </head>
  <body>
    <div class="container">

      <h1 style="font-size:5rem; margin-top:5rem;">WELCOME TO DICE GAME</h1>
      <br>
      <label for="Dice Game">PLAYER 1 NAME:</label>
      <textarea onfocus="this.value=''" id="player1Name" rows="1" cols="10">player1</textarea>
      <br>
      <label for="Dice Game">PLAYER 2 NAME:</label>
      <textarea onfocus="this.value=''" id="player2Name" rows="1" cols="10" onfocus="eraseText">Player2</textarea>
      <br>
      <button type="button" name="button" onclick="document.location='dicee.html'">LETS START</button>
    </div>
  </body>
    <script src="index.js" charset="utf-8"></script>
  <footer>
    ©️ Tuqa Aburaddaha
  </footer>
</html>
