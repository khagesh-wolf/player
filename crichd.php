<?php
// Get the Custom_ID from the URL parameter
$urlParams = $_GET['channel'];
$customID = $urlParams;

// Replace (Custom_ID) in the original URL with the custom ID
$originalURL = "https://bigcast.xyz/embed.php?v=$customID";

// Set the iframe source to the modified URL
$iframeSource = $originalURL;
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CricHD Player</title>
  <style>
    #player-container {
      position: relative;
      overflow: hidden;
      padding-top: 56.25%; /* 16:9 aspect ratio (change based on your player's aspect ratio) */
    }
    #player-iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      border: 0;
    }
  </style>
  <style>
    #player-container {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      background: #000;
      color: #fff;
      overflow: hidden;
    }
    #iframe-iframe, #jwPlayer {
      height: 100vh !important;
      padding: 0;
      margin: 0;
    }
    body {
      height: 100vh;
      margin: 0;
      padding: 0;
    }
    #container {
      position: absolute;
      text-align: center;
    }
    video {
      outline: 0;
    }
    #text {
      position: fixed;
      border: 0;
      left: 0;
      width: 100%;
      color: #fff;
      bottom: 50px;
      text-align: center;
      font-family: tahoma;
      font-size: 20px;
      z-index: 9999;
    }
  </style>
</head>
<body>

<div id="player-container">
  <iframe id="player-iframe" src="<?= $iframeSource ?>" allowfullscreen></iframe>
  <div id="text">www.tutorialto.com</div>
</div>

</body>
</html>
