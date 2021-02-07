var btn = document.createElement("p");   // Create a <button> element
btn.innerHTML = "This is from the index.js file, so seeing this means that it works";                   // Insert text
document.getElementsByClassName("blurb").appendChild(btn);               // Append <button> to <body>
