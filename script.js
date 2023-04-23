//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
  // Get a reference to the body tag
  const body = document.querySelector("body");

  // Create a new text node with the message
  const message = document.createTextNode("DOM load success");

  // Append the text node to the body tag
  body.appendChild(message);
