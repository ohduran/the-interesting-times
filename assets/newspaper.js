
columns = [].slice.call(document.getElementsByClassName('column'))

window.onload = function() {
  maxColumnHeight = Math.max(...columns.map(i => i.offsetHeight));
  for (i = 0; i < columns.length; i++){
    columns[i].style.height = maxColumnHeight + "px";
  }
}
