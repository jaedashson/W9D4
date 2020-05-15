const FollowToggle = require("./follow_toggle.js"); 

// After HTML has fully loaded
$(() => {
  const $toggles = $(".follow-toggle");

  for (let i = 0; i < $toggles.length; i++) {
    new FollowToggle($toggles[i]);
  }



})