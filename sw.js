<!DOCTYPE html>
<html lang="az">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Black Pomodoro</title>
  <link rel="stylesheet" href="style.css">
  <link rel="manifest" href="manifest.json">
</head>
<body>
  <div class="container">
    <h1>Black Pomodoro</h1>
    
    <div class="timer-display">
      <span id="minutes">25</span>:<span id="seconds">00</span>
    </div>

    <div class="inputs">
      <input type="number" id="inputMin" placeholder="Dəq" min="0" value="25">
      <input type="number" id="inputSec" placeholder="San" min="0" max="59" value="0">
      <button id="setBtn">Təyin et</button>
    </div>

    <div class="controls">
      <button id="startBtn">Başlat</button>
      <button id="stopBtn">Dayandır</button>
      <button id="resetBtn">Sıfırla</button>
    </div>

    <div class="sound-upload">
      <label for="audioFile">Xüsusi Həyəcan Səsi Yüklə:</label>
      <input type="file" id="audioFile" accept="audio/*">
    </div>

    <button id="stopAlarmBtn" class="alarm-btn" style="display: none;">Zəngi Söndür</button>
  </div>

  <audio id="alarmSound"></audio>
  <script src="script.js"></script>
</body>
</html>
