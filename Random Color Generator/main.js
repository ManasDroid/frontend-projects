function generate() {

  var hexValues = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"];
  var newColor = "#";
  
  for ( var i = 0; i < 6; i++ ) {
    var x = Math.round( Math.random() * 14 );
    var y = hexValues[x];
    newColor += y;
  }
  
  document.getElementById("container").style.backgroundColor = newColor;
  document.getElementById("output").innerHTML = newColor;
  
}

generate();