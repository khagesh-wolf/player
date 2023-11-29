<?php

// Get the Custom_ID from the URL parameter
$customID = $_GET['src'];

// Replace (Custom_ID) in the original URL with the custom ID
$originalURL = "https://bigcast.xyz/embed.php?v=$customID";

// Set the iframe source to the modified URL
$iframeSource = $originalURL;

// Generate the HTML markup for the player container
$playerContainerHTML = <<<HTML
<div id="player-container">
  <iframe id="player-iframe" src="$iframeSource" allowfullscreen></iframe>
  <div id="text">www.tutorialto.com</div>
</div>
HTML;

// Generate the HTML markup for the entire page
$pageHTML = <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CricHD Player</title>
 <link href="/crichd.css" rel="stylesheet">
</head>
<body>

$playerContainerHTML

</body>
</html>
HTML;

// Echo the entire page HTML
echo $pageHTML;
