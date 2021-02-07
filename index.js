var l = ['water', 'fire', 'ice'];
for(let i = 0; i < l.length; i++){
  var node = document.createElement("LI");                 // Create a <li> node
  var textnode = document.createTextNode(l[i]);           // Create a text node
  node.appendChild(textnode);                              // Append the text to <li>
  document.getElementById("hocho").appendChild(node);
}  
